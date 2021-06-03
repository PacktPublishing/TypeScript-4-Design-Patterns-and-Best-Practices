interface BlogPost {
  title: string;
  tags: string[];
}

//post.title = "Welcome to Javascript";

/*
{
  title: 'Welcome to Typescript',
  tags: [ 'typescript', 'learning', 'example' ]
}
*/

type Primitive = undefined | null | boolean | string | number | Function;
export type DeepReadonly<T> = T extends Primitive
  ? T
  : T extends Array<infer U>
  ? ImmutableArray<U>
  : T extends Map<infer K, infer V>
  ? ImmutableMap<K, V>
  : T extends Set<infer M>
  ? ImmutableSet<M>
  : ImmutableObject<T>;

export type ImmutableArray<T> = ReadonlyArray<DeepReadonly<T>>;
export type ImmutableMap<K, V> = ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>;
export type ImmutableSet<T> = ReadonlySet<DeepReadonly<T>>;
export type ImmutableObject<T> = {
  readonly [K in keyof T]: DeepReadonly<T[K]>;
};

const post: DeepReadonly<BlogPost> = {
  title: "Welcome to Typescript",
  tags: ["typescript", "learning"],
};

(post.tags as string[]).push("demo"); // works

import { List } from "immutable";

interface ImmutableBlogPost {
  title: string;
  tags: List<string>;
}

const anotherPost: ImmutableBlogPost = {
  title: "Welcome to Typescript",
  tags: List(["typescript", "learning"]),
};
(anotherPost.tags as any).push("demo");
console.log(anotherPost.tags.toArray()); // [ 'typescript', 'learning' ]
