import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Stamp } from "@/components/ui/stamp";

describe("UI Primitives Component Tests", () => {
  it("renders Button with proper children and disabled state", () => {
    const { rerender } = render(<Button>Click Me</Button>);
    expect(screen.getByRole("button", { name: "Click Me" })).toBeDefined();

    rerender(<Button disabled>Click Me</Button>);
    expect((screen.getByRole("button") as HTMLButtonElement).disabled).toBe(true);
  });

  it("renders Badge with variant styles", () => {
    render(<Badge variant="found">Found Item</Badge>);
    expect(screen.getByText("Found Item")).toBeDefined();
  });

  it("renders Stamp with status text", () => {
    render(<Stamp status="LISTED" />);
    expect(screen.getByRole("status")).toBeDefined();
    expect(screen.getByText("[LISTED]")).toBeDefined();
  });
});
