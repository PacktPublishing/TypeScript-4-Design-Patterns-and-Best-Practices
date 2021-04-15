export interface WebsitePageFactory {
  createHeader(text: string): Header;
  createContent(text: string): Content;
  createFooter(text: string): Footer;
}

interface Header {
  content: string;
}

interface Content {
  content: string;
}

interface Footer {
  content: string;
}

export class HTMLWebsitePageFactory implements WebsitePageFactory {
  createHeader(text: string): HTMLHeader {
    return new HTMLHeader(text);
  }
  createContent(text: string): HTMLContent {
    return new HTMLContent(text);
  }
  createFooter(text: string): HTMLFooter {
    return new HTMLFooter(text);
  }
}

export class HTMLHeader implements Header {
  content: string;
  constructor(text: string) {
    this.content = `<head>${text}</head>`;
  }
}

export class HTMLContent implements Content {
  content: string;
  constructor(text: string) {
    this.content = `<main>${text}</main>`;
  }
}

export class HTMLFooter implements Footer {
  content: string;
  constructor(text: string) {
    this.content = `<footer>${text}</footer>`;
  }
}

const wpf: WebsitePageFactory = new HTMLWebsitePageFactory();
console.log(wpf.createContent("Content").content);
console.log(wpf.createHeader("Header").content);
console.log(wpf.createFooter("Footer").content);

type Circle = string;
type CircleProps = {
  cx: number;
  cy: number;
  radius: number;
};
type RectangleProps = {
  x1: number;
  y1: number;
  width: number;
  height: number;
};

interface BrowserGraphicsFactory {
  drawCircle(props: CircleProps): Circle;
  drawRectangle(props: RectangleProps): Circle;
}

// class CanvasGraphicsFactory implements BrowserGraphicsFactory {

// }

// class SVGGraphicsFactory implements BrowserGraphicsFactory {

// }
