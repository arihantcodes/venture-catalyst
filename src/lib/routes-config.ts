// for page navigation & to sort on leftbar
export const ROUTES = [
    {
      title: "Getting Started",
      href: "getting-started",
      items: [
        { title: "What is Startup", href: "/introduction" },
        { title: "Why Should you build your own", href: "/installation" },
        { title: "Starting a startup", href: "/quick-start-guide" },
        { title: "Vcatalyst", href: "/project-structure" },
     
       
      ],
    },
   
  ];
  
  export const page_routes = ROUTES.map(({ href, items }) => {
    return items.map((link) => {
      return {
        title: link.title,
        href: href + link.href,
      };
    });
  }).flat();
  