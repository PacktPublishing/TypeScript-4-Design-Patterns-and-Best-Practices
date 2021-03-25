export class Website {
  constructor(
    public name?: string,
    public host?: string,
    public port?: number,
    public adminEmail?: string,
    public content?: string,
    public isPremium?: boolean
  ) {}
}

export interface WebsiteBuilder {
  setName(name: string): WebsiteBuilder;
  setHost(host: string): WebsiteBuilder;
  setPort(port: number): WebsiteBuilder;
  setAdminEmail(email: string): WebsiteBuilder;
  setContent(content: string): WebsiteBuilder;
  setIsPremium(isPremium: boolean): WebsiteBuilder;
  build(): Website;
}

export class PremiumWebsiteBuilder implements WebsiteBuilder {
  private website: Website;
  constructor() {
    this.website = new Website();
    this.clear();
  }

  setName(name: string): WebsiteBuilder {
    this.website.name = name;
    return this;
  }

  setHost(host: string): WebsiteBuilder {
    this.website.host = host;
    return this;
  }

  setPort(port: number): WebsiteBuilder {
    this.website.port = port;
    return this;
  }

  setAdminEmail(email: string): WebsiteBuilder {
    this.website.adminEmail = email;
    return this;
  }

  setContent(content: string): WebsiteBuilder {
    this.website.content = content;
    return this;
  }

  setIsPremium(): WebsiteBuilder {
    this.website.isPremium = true;
    return this;
  }

  build(): Website {
    const website = this.website;
    this.clear();
    return website;
  }

  clear(): void {
    this.website = new Website();
    this.website.isPremium = true;
  }
}

const wb = new PremiumWebsiteBuilder();
wb.setName("example").setHost("localhost").setPort(3000);

const website = wb.build();
