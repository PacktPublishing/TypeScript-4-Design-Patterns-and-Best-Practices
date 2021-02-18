interface Identifiable<T extends string | number> {
  id: T;
}

class Customer {}

class Product implements Identifiable<string> {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}

abstract class BaseAPIClient {}

// Association
class Blog implements Identifiable<string> {
  id: string;
  authorId: string;
  constructor(id: string, authorId: string) {
    this.id = id;
    this.authorId = authorId;
  }
}

class Author {}

// Aggregation
class QueryBuilder {}
class EmptyQueryBuilder extends QueryBuilder {}

interface SearchParams {
  qb?: QueryBuilder;
  path: string;
}

class SearchService {
  queryBuilder?: QueryBuilder;
  path: string;

  constructor({ qb = EmptyQueryBuilder, path }: SearchParams) {
    this.queryBuilder = qb;
    this.path = path;
  }
}

// Composition
class Directory {
  files: File[];
  directories: Directory[];
  constructor(files: File[], directories: Directory[]) {
    this.files = files;
    this.directories = directories;
  }

  addFile(file: File): void {
    this.files.push(file);
  }
  addDir(directory: Directory): void {
    this.directories.push(directory);
  }
}

// Visibility
class SSHUser {
  private privateKey: string;
  public publicKey: string;

  constructor(prvKey: string, pubKey: string) {
    this.privateKey = prvKey;
    this.publicKey = pubKey;
  }

  public getBase64(): string {
    return Buffer.from(this.publicKey).toString("base64");
  }
}

// Inheritance

class BaseClient {}
class UsersApiClient extends BaseClient {}
