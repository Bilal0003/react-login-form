"use client";

import LoginLayout from "./layout";

export default function LoginPage() {
  return (
    <Base disablePadding={true}>
      <LoginContext>
        <LoginLayout />
      </LoginContext>
    </Base>
  );
}
