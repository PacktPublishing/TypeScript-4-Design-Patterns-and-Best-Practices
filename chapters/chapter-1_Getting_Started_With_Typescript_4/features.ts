type Point2d = [number, number];
type Point3d = [number, number, number];

const point1: Point2d = [1, 2];
const point2: Point3d = [1, 2, 3];

type NamedType<T extends unknown[]> = [string, ...T];
type NamedPoint2d = NamedType<Point2d>;

const point3: NamedPoint2d = ["Point: (1, 2)", 1, 2];

type Point2dL = [x: number, y: number];
type Point3dL = [x: number, y: number, z: number];

type Suit = `${"Spade" | "Heart" | "Diamond" | "Club"}`;
type Rank = `${
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "Jack"
  | "Queen"
  | "King"
  | "Ace"}`;

type Deck = `${Rank} of ${Suit}`;
