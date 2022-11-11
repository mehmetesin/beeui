import React from 'react'

import { Button } from 'beeui'
import 'beeui/dist/index.css'

const App = () => {
  return <>
    <div style={{ "margin": "1rem", "display": "flex", "gap": ".5rem" }}>
      <Button type="default">Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button><br />
    </div>
    <div style={{ "margin": "1rem", "display": "flex", "gap": ".5rem" }}>
      <Button type="default" disabled>Default</Button>
      <Button type="primary" disabled>Primary</Button>
      <Button type="dashed" disabled>Dashed</Button>
      <Button type="text" disabled>Text</Button>
      <Button type="link" disabled>Link</Button><br />
    </div>
  </>
}

export default App
