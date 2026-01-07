import React from 'react'


export default function Footer() {
  return (
      <footer style={{textAlign: "center", background: "#efefef", padding: "10px", position: "fixed", bottom: "0", width: "100%"}}>
        <p className="copyrighttext" style={{margin: "0", fontSize: "13px"}}>Copyright &copy; <span className="copy-current-year">2026</span>, react CaseConverter All rights reserved.</p>     
      </footer>

  )
}
