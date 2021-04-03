import {
  HTMLWebsitePageFactory,
  WebsitePageFactory,
  HTMLContent,
  HTMLHeader,
  HTMLFooter,
} from "./AbstractFactory";

const wpf: WebsitePageFactory = new HTMLWebsitePageFactory();
test("it creates an HTML Content type", () => {
  const content = wpf.createContent("Content");
  expect(content).toBeInstanceOf(HTMLContent);
  expect(content.content).toBe("<main>Content</main>");
});
test("it creates an HTML Header type", () => {
  const header = wpf.createHeader("Header");
  expect(header).toBeInstanceOf(HTMLHeader);
  expect(header.content).toBe("<head>Header</head>");
});
test("it creates an HTML Footer type", () => {
  const footer = wpf.createFooter("Footer");
  expect(footer).toBeInstanceOf(HTMLFooter);
  expect(footer.content).toBe("<footer>Footer</footer>");
});
