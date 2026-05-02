import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    let body = await request.json();

    const client = await clientPromise;
    const db = client.db("Linktree");
    const collection = db.collection("links");

    const doc = await collection.findOne({ email: body.email });
    const DoHandelExist = await collection.findOne({ handel: body.handel });
    if (DoHandelExist)
    {
        return Response.json({ success: false, msg: "handel already exist with other email", error: true });
    }

    if (doc) {
        let reDoc = await collection.findOne({ email: body.email, handel: body.handel });
        if (reDoc) {
            let data = await collection.updateOne(
                { email: body.email, handel: body.handel },
                {
                    $push: { link: { $each: body.link } }
                },
            );

            if (data.modifiedCount > 0) {
                return Response.json({ success: true, msg: "links appended successfully", error: false });
            }
            else {
                return Response.json({ success: true, msg: "Links are not appended", error: false });
            }
        }
        else {
            return Response.json({ success: false, msg: "handel already exist with this email", error: true });
        }
    }
    else
    {
        await collection.insertOne(body);
        return Response.json({ success: true, msg: "Link tree created successfully", error: false });
    }
}