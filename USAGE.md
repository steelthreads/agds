# Usage 

## 1. Install 

All apps require Core:

    yarn add @ag.ds/core 
    
Then add packages:
    
    yarn add @ag.ds/header @ag.ds/footer @ag.ds/main-nav

Don't forget to add `pancake/` to your project's gitignore.     
    
## 2. Set up Core

Incorporate the Provider component in your app:

    import { AgdsProvider } from '@ag.ds/core';
    
    <AgdsProvider
        linkFactory={({ href, children, className, ...props }) => {
          return (
            <NextLink href={href} {...props}>
              <a className={className}>{children}</a>
            </NextLink>
          );
        }}
      >
      <MyApp />
    </AgdsProvider>
    

## 3. User any Component inside the Provider:


    import { Header } from '@ag.ds/header';
    
    <Header />
    
## 4. Contribute back to @ag.ds by opening a PR, receive the changes once they have been published:

    npm i @ag.ds/header@latest
