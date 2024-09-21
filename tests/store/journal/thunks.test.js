import { beforeEach, describe, test, vitest } from "vitest";
import { startNewNote } from "../../../src/store/journal/thunks";

describe("journal Thunks tests", () => {
  const dispatch = vitest.fn();
  const getState = vitest.fn();

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  test("startNewNote should create an empty note", async () => {
    getState.mockReturnValue({ auth: { uid: "TestUID" } });

    await startNewNote()(dispatch, getState);

    // expect(dispatch).toHaveBeenCalledWith(createNewNote(note));
  });
});
