export const notesLoader = async ({params:{folderId}})=>{
    console.log('param folder', {folderId})
    const query = `query ExampleQuery($folderId: String) {
        folder(folderId: $folderId) {
          id
          name
          notes {
            id
            content
          }
        }
      }`;
      const res = await fetch ('http://localhost:4000/graphql', {
        method: 'POST',
        headers :{
            'Content-Type': 'application/json', 
            'Accept':'application/json'
        }, 
        body: JSON.stringify({
            query,
            variables:{
                folderId
            }
        })
    }); 
        const {data} = await res.json(); 
        console.log('data',{data}) ;
        return data;
}
