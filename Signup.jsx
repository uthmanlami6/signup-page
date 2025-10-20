export default function Signup(){
return (
    <main style={{backgroundColor:'green',color:'yellow',padding:'20px',borderRadius:'8px',maxWidth:'400px',margin:'0 auto',}}>
      <form>
        <div>
          <label style={{marginBottom:'5px',}}>
            Username:
            <input style={{padding:'7px', display:'flex',alignItems:'center', justifyItems:'end', marginBottom:'10px',border:'1px solid gray',borderRadius:'4px',}}
              type="text"
              name="username" 

            />
          </label>
        </div>
        <div>
          <label style={{marginBottom:'5px,'}}>
 Email:
            <input  style={{padding:'7px', display:'flex',alignItems:'center', justifyItems:'end', marginBottom:'10px',border:'1px solid gray',borderRadius:'4px',}}
              type="email"
              name="email"
              required
            />
          </label>
        </div>
        <div>
          <label style={{marginBottom:'5px,'}}>
            Password:
            <input style={{padding:'7px', display:'flex',alignItems:'center', justifyItems:'end', marginBottom:'10px',border:'1px solid gray',borderRadius:'4px',}}
              type="password"
              name="password"
             required
            />
          </label>
        </div>
        <button style={{padding:'10px',backgroundColor:'greenyellow',color:'gray',border:'none',borderRadius:'4px',hover:'red', }}>Sign Up</button>
      </form>
    </main>
  );
};