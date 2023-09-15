## Getting Started

Flow uses `websockets` to listen for updates and then automatically draws the diagram to the screen. By default, it is listening
on `ws://localhost:7070`, this can be altered by changing the value in the `App.tsx` file. Instead of DOM manipulation, this application
utlizes `canvas` to create the graph, which is less expensisve to draw sprites on the screen.

## Data Expectation

Flow expects to recieve a **stringified JSON object**. Here is an example of what the shape of the data has to be in when it gets sent to the app:

```
    rows: [1, 2, 3, 4, 5]
    columns: ["0x0", "0x3", "0x4", "0x40"],
      data: {
        CHI_0_TXREQ_0: {
          elder_id: "CHI_1",
          self_id: "CHI_1",
          sent_time: 0,
          rcvd_time: 2,
          src_node: "0x0",
          tgt_node: "0x40",
          channel: "REQ",
          description: "WrDataPartial",
          address: "ADDR",
        },
        CHI_2_TXREQ_0: {
          elder_id: "CHI_2",
          self_id: "CHI_2",
          sent_time: 1,
          rcvd_time: 3,
          src_node: "0x3",
          tgt_node: "0x40",
          channel: "REQ",
          description: "RdUnique",
          address: "ADDR",
        },
        ... etc.
      }
```

- `rows`: Denotes to the row headers on the side of the graph. Send these in the order you want displayed.
- `columns`: Denotes to the column headers on top of the graph. Send these in the order you want displayed.
- `data`: Denotes to an object or dictionary of data. This is the main meat of the graph and will render how the content is drawn on the screen.

## Running Flow

- If this is your first time using flow, run `npm i`
- Run `npm start`, it will then open a new browser.
- To check to see if the app has connected to your server, locate the `Status` on the bottom right of the side bar.

## Features

- Tooltip appears on hover over arrows
- Dark mode available
- Ability to draw decriptions next to arrows
- Your preferences are saved and will persist as long as you don't clear your browsers cache.
- Download a PNG of the graph on screen.
- Graph is dynamic and will accomodate any size. You can use arrow keys to navigate graph both veritcally and horizontally

## Limitations:

- Downloading a PNG will not capture an image of the whole graph, just what's on your screen
- Downloading the PNG doesn't play nice with dark mode.
- Not mobile friendly. Use only on your desktop, or you're going to have a bad time.
