import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-light-text/60 dark:text-dark-text/60">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Naveen Prashanna. All rights reserved.
      </small>
    </footer>
  );
}