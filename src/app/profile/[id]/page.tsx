export default function UserProfile({params} : any) {
  return (
    <div className="text-2xl flex justify-center items-center flex-col h-screen">
      <h1>Profile Page </h1>
      <h2>{params.id}</h2>
    </div>
  );
}
