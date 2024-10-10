import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import Grid from "../../components/Grid";
import { renderWithProviders } from "../../test/testUtils";
import { toggleCell } from "../../store/grid/slice";
import { useAppDispatch, useAppSelector } from "../../store";
import { CellState } from "../../store/grid/types";
import type { RootState } from "../../store";
import { selectFlattenedGrid } from "../../store/grid/selectors";

// Mock react-redux
vi.mock("react-redux", async (importOriginal) => {
  const mod = await importOriginal<typeof import("react-redux")>();
  return {
    ...mod,
    Provider: ({ children }: { children: React.ReactNode }) => children,
  };
});

// Mock the useAppSelector and useAppDispatch hooks
vi.mock("../../store", () => ({
  useAppSelector: vi.fn(),
  useAppDispatch: vi.fn(),
}));

describe("Grid component", () => {
  const mockState: Partial<RootState> = {
    grid: {
      cells: {
        "0,0": { id: "0,0", state: CellState.Dead },
        "0,1": { id: "0,1", state: CellState.Alive },
      },
      width: 2,
      height: 1,
    },
    action: {
      isRunning: false,
      stepCount: 10,
    },
  };

  beforeEach(() => {
    vi.mocked(useAppSelector).mockImplementation((selector) => {
      if (selector === selectFlattenedGrid) {
        return Object.values((mockState as RootState).grid.cells);
      }
      return selector(mockState as RootState);
    });
    vi.mocked(useAppDispatch).mockReturnValue(vi.fn());
  });

  it("renders without crashing", () => {
    renderWithProviders(<Grid />);

    expect(screen.getByTestId("grid")).toBeInTheDocument();
    expect(screen.getAllByTestId("cell")).toHaveLength(2);
  });

  it("dispatches toggleCell action when a cell is clicked", () => {
    const mockDispatch = vi.fn();
    vi.mocked(useAppDispatch).mockReturnValue(mockDispatch);

    renderWithProviders(<Grid />);

    const cells = screen.getAllByTestId("cell");
    fireEvent.click(cells[0]);

    expect(mockDispatch).toHaveBeenCalledWith(toggleCell("0,0"));
  });
});
