export const noteLoader = async ({params:{noteId}})=>{
    console.log('param note', {noteId})
    const query = `query ExampleQuery( $noteId: String) {
  
        note(noteId: $noteId) {
          id
          content
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
                noteId
            }
        })
    }); 
        const {data} = await res.json(); 
        console.log('data note loader',{data}) ;
        return data;
}