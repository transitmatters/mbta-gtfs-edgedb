This branch contains a minimal-ish reproduction of a problem I encountered with an `edgeql-js`
schema and the TypeScript compiler/language server. `index.ts` contains a simple function that
returns an EdgeQL select expression:

```ts
const getArchiveQuery = (id: string) => {
    return e.select(e.GtfsArchive, (archive) => {
        return { filter: e.op(archive.id, "=", e.uuid(id)) };
    });
};
```

I want to extract the return type of this function:

```ts
type ArchiveQuery = ReturnType<typeof getArchiveQuery>;
```

This completely breaks TypeScript. It renders the language server unresponsive in VSCode, and causes
`npx tsc` to hang indefinitely. Interestingly, `ReturnType<T>` looks like a key part of the issue.
If I write:

```ts
const query = e.select(e.GtfsArchive, (archive) => {
    return { filter: e.op(archive.id, "=", e.uuid("not-a-real-uuid-but-whatever")) };
});

type ArchiveQuery = typeof query;
```

then TS has no problem extracting that type for me.

I am using:

- **macOS** 12.3.1
- **Node** 16.6.0
- **TypeScript** 4.7.4