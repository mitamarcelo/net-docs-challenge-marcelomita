import { describe, it, expect, vi } from "vitest";
import { useDispatch, useSelector } from "react-redux";
import { store, useAppDispatch, useAppSelector, RootState } from "../../store";

// Mock react-redux
vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn(),
}));

describe("store", () => {
  it("should create a store with the root reducer", () => {
    expect(store.getState()).toEqual(
      expect.objectContaining({
        grid: expect.any(Object),
        action: expect.any(Object),
      })
    );
  });

  it("should have the correct type for RootState", () => {
    const state: RootState = store.getState();
    expect(state).toHaveProperty("grid");
    expect(state).toHaveProperty("action");
  });

  it("useAppDispatch should call useDispatch", () => {
    const mockDispatch = vi.fn();
    vi.mocked(useDispatch).mockReturnValue(mockDispatch);

    const dispatch = useAppDispatch();
    dispatch({ type: "TEST" });

    expect(useDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({ type: "TEST" });
  });

  it("useAppSelector should call useSelector", () => {
    const mockState: RootState = {
      grid: { cells: {}, width: 0, height: 0 },
      action: { isRunning: false, stepCount: 10 },
    };
    vi.mocked(useSelector).mockImplementation((selector) =>
      selector(mockState)
    );

    const result = useAppSelector((state) => state.action.isRunning);

    expect(useSelector).toHaveBeenCalled();
    expect(result).toBe(false);
  });
});
