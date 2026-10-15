import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ClickToPlayVideo } from "@/components/ClickToPlayVideo";

afterEach(cleanup);

describe("ClickToPlayVideo", () => {
  it("does not mount or request the video until the visitor clicks play", () => {
    const { container } = render(<ClickToPlayVideo src="/demo.mp4" poster="/poster.webp" label="Passo 1" />);
    expect(container.querySelector("video")).toBeNull();
    expect(screen.getByRole("img").getAttribute("src")).toBe("/poster.webp");
    fireEvent.click(screen.getByRole("button", { name: "Reproduzir Passo 1" }));
    const video = container.querySelector("video");
    expect(video?.getAttribute("src")).toBe("/demo.mp4");
    expect(video?.getAttribute("preload")).toBe("none");
    expect(video?.hasAttribute("controls")).toBe(true);
  });
});