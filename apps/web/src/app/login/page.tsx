"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Enforce college pilot domain per docs/00-PROJECT_BRIEF.md
    const allowedDomain = "nitp.ac.in";
    const emailDomain = email.split("@")[1]?.toLowerCase();
    if (!emailDomain || (emailDomain !== allowedDomain && !emailDomain.endsWith(`.${allowedDomain}`))) {
      setError(`Please use your official college email address (@${allowedDomain})`);
      return;
    }

    setLoading(true);
    // Simulate async magic link dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-[var(--white)] border-3 border-[var(--ink)] p-8 shadow-[var(--shadow-2)] space-y-6">
        <header className="border-b-2 border-[var(--ink)] pb-4 space-y-1">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink)]/70">
            CAMPUS AUTHENTICATION
          </span>
          <h1 className="text-3xl font-black uppercase text-[var(--ink)]">
            Sign In
          </h1>
          <p className="text-xs font-mono text-[var(--ink)]/75">
            Students, custodians, and faculty sign in with official @nitp.ac.in credentials.
          </p>
        </header>

        {submitted ? (
          <div className="border-2 border-[var(--found)] bg-[var(--found)]/10 p-4 space-y-2" role="status">
            <h2 className="font-bold text-sm uppercase text-[var(--ink)]">
              Check your inbox!
            </h2>
            <p className="text-xs font-mono text-[var(--ink)]/80">
              We sent a magic sign-in link to <span className="font-bold">{email}</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="College Email"
              type="email"
              placeholder="rollno@nitp.ac.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
              required
            />

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              isLoading={loading}
              disabled={loading}
            >
              Send Magic Link
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
