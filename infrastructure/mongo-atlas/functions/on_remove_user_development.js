// Mongodb Atlas Database Trigger: onRemoveUserDevelopment

exports = async function(changeEvent) {
  const removed_user = changeEvent.fullDocumentBeforeChange;

  const db = context.services.get("development-cluster-svc").db("blender");
  // Remove residual data from user
  const profiles_collection = db.collection("profiles");
  const uploads_collection = db.collection("uploads");
  const sessions_collection = db.collection("sessions");
  const posts_collection = db.collection("posts");

  const users_collection = db.collection("users");

  // Remove
  await profiles_collection.deleteOne({ _id: removed_user.profile }),
  await uploads_collection.deleteMany({ user: removed_user._id }),
  await sessions_collection.deleteMany({ user: removed_user._id }),
  await posts_collection.deleteMany({ user: removed_user._id });

  // Return current count of users

  const user_count = await users_collection.count();

  console.log("User count: " + user_count);
  console.log("Previous user count: " + (user_count + 1));
  console.log("Removed user: " + removed_user.email);
};