   import { useEffect } from "react";
   import scrollbar from 'smooth-scrollbar';
   import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

   var options = {
     damping: 0.05,
     renderByPixels: true,
     plugins: {
       overscroll: {
         enable: true,
         damping: 0.07,
         effect: 'glow',
         glowColor: '#7d89a0',
         maxOverscroll: 180,
       }
     }
   };

   const Scroll = () => {
     useEffect(() => {
       scrollbar.use(OverscrollPlugin);
       const scrollInstance = scrollbar.init(document.body, options);

       return () => {
         scrollInstance.destroy();
       };
     }, []);

     return null;
   };

   export default Scroll;
   