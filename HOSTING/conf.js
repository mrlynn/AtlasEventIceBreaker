GLOBALSTITCHAPP = "brewupwelcome-axqri";
GLOBALDBNAME = "welcome";
const client = stitch.Stitch.initializeDefaultAppClient(GLOBALSTITCHAPP);
const mongodb = client.getServiceClient(stitch.RemoteMongoClient.factory,"mongodb-atlas");
const db = mongodb.db(GLOBALDBNAME);

const {
    Stitch,
    AnonymousCredential,
} = stitch;