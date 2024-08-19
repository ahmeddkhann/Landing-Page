import React from 'react'

const Footer = () => {
    const resourcesLinks = [
        {
            href: "#",
            text: "Getting started"
        },
        {
            href: "#",
            text: "Documnetation"
        },
        {
            href: "#",
            text: "Tutorials"
        },
        {
            href: "#",
            text: "API Preferences"
        },
        {
            href: "#",
            text: "Community Forums"
        }
    ]
    const platformLinks = [
        {
            href: "#",
            text: "Features"
        },
        {
            href: "#",
            text: "Supported Devices"
        },
        {
            href: "#",
            text: "System Requirements"
        },
        {
            href: "#",
            text: "Downloads"
        },
        {
            href: "#",
            text: "Release Notes"
        }
    ]
    const communityLinks = [
        {
            href: "#",
            text: "Events"
        },
        {
            href: "#",
            text: "Meetups"
        },
        {
            href: "#",
            text: "Conferences"
        },
        {
            href: "#",
            text: "Hackathons"
        },
        {
            href: "#",
            text: "Jobs"
        }
    ]
  return (
    <div>
      <footer className='mt-20 border-t py-10 border-neutral-700'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>

            <div>
                <h3 className='text-md font-semibold mb-4'>
                    Resources
                </h3>
                <ul className='space-y-2'> 
                    {resourcesLinks.map((link,index)=>(
                        <li key={index}>
                            <a href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className='text-md font-semibold mb-4'>
                    Platforms
                </h3>
                <ul className='space-y-2'> 
                    {platformLinks.map((link,index)=>(
                        <li key={index}>
                            <a href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className='text-md font-semibold mb-4'>
                    Community
                </h3>
                <ul className='space-y-2'> 
                    {communityLinks.map((link,index)=>(
                        <li key={index}>
                            <a href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
