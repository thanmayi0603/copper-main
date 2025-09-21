import React from "react";

const HeroCode = () => {
  return (
    <div className="mockup-code w-full text-xl bg-primary">
      <pre data-prefix="$">
        <code>import Hono from &apos;hono&apos;</code>
      </pre>
      <pre data-prefix=">">
        <code>const app = new Hono()</code>
      </pre>
      <pre data-prefix=">">
        <code>app.get(&apos;/&apos;, (c) =&gt; c.text(&apos;Hello Hono!&apos;))</code>
      </pre>
      <pre data-prefix=">">
        <code>export default app</code>
      </pre>
    </div>
  );
};

export default HeroCode;
