import {
  Website,
  PremiumWebsiteBuilder,
  WebsiteBuilder,
} from "./WebsiteBuilder";

let wb: WebsiteBuilder;
beforeEach(() => {
  wb = new PremiumWebsiteBuilder();
});

test("PremiumWebsiteBuilder builds a premium website with the correct properties", () => {
  const website = wb
    .setName("example")
    .setHost("localhost")
    .setIsPremium(false)
    .setPort(3000)
    .build();
  expect(website.isPremium).toBeTruthy;
  expect(website.name).toBe("example");
  expect(website.host).toBe("localhost");
  expect(website.port).toBe(3000);
});

test("PremiumWebsiteBuilder order of steps does not have side effects", () => {
  const website = wb
    .setName("example")
    .setPort(3000)
    .setHost("localhost")
    .setIsPremium(false)
    .setName("example2")
    .build();
  expect(website.isPremium).toBeTruthy;
  expect(website.name).toBe("example2");
  expect(website.host).toBe("localhost");
  expect(website.port).toBe(3000);
});
