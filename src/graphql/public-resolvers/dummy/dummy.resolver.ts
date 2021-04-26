
const simpleMessage = async (_: unknown, { name }: { name: string }): Promise<string> =>  `Hi ${name}, this is to test graphql query if working`;

const DummyResolvers = {
    Query: {
        simpleMessage
    }
}

export default DummyResolvers