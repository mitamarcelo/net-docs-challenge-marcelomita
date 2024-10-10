import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useGridResize } from "../../hooks/useGridResize";
import { createGrid } from "../../store/grid/slice";
import { useAppDispatch } from "../../store";

// Mock the useAppDispatch hook
vi.mock("../../store", () => ({
  useAppDispatch: vi.fn(),
}));

describe("useGridResize hook", () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.mocked(useAppDispatch).mockReturnValue(mockDispatch);
    vi.spyOn(window, "addEventListener");
    vi.spyOn(window, "removeEventListener");
  });

  it("should call createGrid on mount", () => {
    renderHook(() => useGridResize());
    expect(mockDispatch).toHaveBeenCalledWith(createGrid(expect.any(Object)));
  });

  it("should add and remove event listener", () => {
    const { unmount } = renderHook(() => useGridResize());
    expect(window.addEventListener).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    );

    unmount();
    expect(window.removeEventListener).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    );
  });

  it("should update grid size on window resize", () => {
    vi.spyOn(window, "innerWidth", "get").mockReturnValue(1000);
    vi.spyOn(window, "innerHeight", "get").mockReturnValue(800);

    renderHook(() => useGridResize());

    // Simulate resize event
    window.dispatchEvent(new Event("resize"));

    expect(mockDispatch).toHaveBeenCalledWith(
      createGrid({
        width: expect.any(Number),
        height: expect.any(Number),
      })
    );
  });
});
