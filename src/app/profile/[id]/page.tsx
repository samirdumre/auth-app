export default async function UserProfile({params} : any) {

  const {id} = await params;

  return (
    <div className="text-2xl flex justify-center items-center flex-col h-screen">
      <h1>Profile Page </h1>
      <h2>{id}</h2>
    </div>
  );
}
