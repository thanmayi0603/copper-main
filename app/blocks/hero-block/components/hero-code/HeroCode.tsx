import React from "react";

const HeroCode = () => {
  return (
    <div className="mockup-code w-full text-xl bg-primary">
      <pre data-prefix="$">
        <code>import Hono from 'hono'</code>
      </pre>
      <pre data-prefix=">">
        <code>const app = new Hono()</code>
      </pre>
      <pre data-prefix=">">
        <code>app.get('/', (c) =&gt; c.text('Hello Hono!'))</code>
      </pre>
      <pre data-prefix=">">
        <code>export default app</code>
      </pre>
    </div>
  );
};

export default HeroCode;
