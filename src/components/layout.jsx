import React from "react";


const Layout = ({ children, renderInSlot, renderInActionSlot }) => {

  return (
    <main >
      <div >
        <header>
          <div>
            My Blog
          </div>
          <div>
            {renderInSlot && renderInSlot()}
            {renderInActionSlot && renderInActionSlot()}
          </div>
        </header>
        {children}
      </div>
    </main>
  );
};

export default Layout;
