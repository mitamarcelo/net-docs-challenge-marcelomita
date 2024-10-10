import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import ActionButtons from "../../components/ActionButtons";
import { renderWithProviders } from "../../test/testUtils";
import { toggleIsRunning, setStepCount } from "../../store/action/slice";
import { nextStep } from "../../store/grid/slice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";

// Mock react-redux
vi.mock("react-redux", async (importOriginal) => {
  const mod = await importOriginal<typeof import("react-redux")>();
  return {
    ...mod,
    useSelector: vi.fn(),
    Provider: ({ children }: { children: React.ReactNode }) => children,
  };
});

vi.mock("../../store", () => ({
  useAppDispatch: vi.fn(),
}));

describe("ActionButtons component", () => {
  const mockState = {
    action: {
      isRunning: false,
      stepCount: 10,
    },
  };

  beforeEach(() => {
    vi.mocked(useSelector).mockReturnValue(mockState.action);
    vi.mocked(useAppDispatch).mockReturnValue(vi.fn());
  });

  it("renders all buttons and input", () => {
    renderWithProviders(<ActionButtons />);

    expect(screen.getByText("Next Generation")).toBeInTheDocument();
    expect(screen.getByText("Start")).toBeInTheDocument();
    expect(screen.getByText("Run 10 Steps")).toBeInTheDocument();
    expect(screen.getByLabelText("Set number of steps:")).toBeInTheDocument();
  });

  it("dispatches nextStep when 'Next Generation' is clicked", () => {
    const mockDispatch = vi.fn();
    vi.mocked(useAppDispatch).mockReturnValue(mockDispatch);

    renderWithProviders(<ActionButtons />);

    fireEvent.click(screen.getByText("Next Generation"));
    expect(mockDispatch).toHaveBeenCalledWith(nextStep());
  });

  it("dispatches toggleIsRunning when 'Start/Stop' is clicked", () => {
    const mockDispatch = vi.fn();
    vi.mocked(useAppDispatch).mockReturnValue(mockDispatch);

    renderWithProviders(<ActionButtons />);

    fireEvent.click(screen.getByText("Start"));
    expect(mockDispatch).toHaveBeenCalledWith(toggleIsRunning());
  });

  it("dispatches setStepCount when input value changes", () => {
    const mockDispatch = vi.fn();
    vi.mocked(useAppDispatch).mockReturnValue(mockDispatch);

    renderWithProviders(<ActionButtons />);

    const input = screen.getByLabelText("Set number of steps:");
    fireEvent.change(input, { target: { value: "20" } });
    expect(mockDispatch).toHaveBeenCalledWith(setStepCount(20));
  });
});
