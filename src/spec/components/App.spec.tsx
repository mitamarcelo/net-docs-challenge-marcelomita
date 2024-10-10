import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import App from "../../App";
import { renderWithProviders } from "../../test/testUtils";
import { useGridResize } from "../../hooks/useGridResize";

// Mock the useGridResize hook
vi.mock("../../hooks/useGridResize", () => ({
  useGridResize: vi.fn(),
}));

// Mock the child components
vi.mock("../../components/Grid", () => ({
  default: () => <div data-testid="mock-grid">Mock Grid</div>,
}));

vi.mock("../../components/ActionButtons", () => ({
  default: () => (
    <div data-testid="mock-action-buttons">Mock Action Buttons</div>
  ),
}));

describe("App component", () => {
  it("renders without crashing", () => {
    renderWithProviders(<App />);

    // Check if the title is rendered
    expect(screen.getByText("Game of Life")).toBeInTheDocument();

    // Check if the Grid component is rendered
    expect(screen.getByTestId("mock-grid")).toBeInTheDocument();

    // Check if the ActionButtons component is rendered
    expect(screen.getByTestId("mock-action-buttons")).toBeInTheDocument();
  });

  it("calls useGridResize hook", () => {
    const useGridResizeMock = vi.mocked(useGridResize);
    renderWithProviders(<App />);
    expect(useGridResizeMock).toHaveBeenCalled();
  });
});
