import 'boxicons/css/boxicons.min.css';

export default function Footer() {
  return (
    <div>
        <footer
        className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div
            className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
            <div className="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
            </div>

            <div className="flex justify-center">
                <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                    <box-icon type='logo' name='meta' color='blue'></box-icon>
                </a>
                <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                    <box-icon name='instagram' type='logo' color='red'></box-icon>
                </a>
                
                <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                    <box-icon name='twitter' type='logo' color='lightblue'></box-icon>
                </a>
                <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                    <box-icon name='tiktok' type='logo' color='black'></box-icon>
                </a>
            
            </div>
        </div>

        
        <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="">
                <h6
                className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                FLOWER SHOP Name
                </h6>
                <p>
                
                </p>
            </div>

            <div className="">
                <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Products
                </h6>
                <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">Flower</a>
                </p>
                <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">Gift Basket</a>
                </p>
                <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">Chocolate</a>
                </p>
                <p>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">Cakes</a>
                </p>
            </div>

            <div className="">
                <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Useful links
                </h6>
                <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                    >Pricing</a>
                </p>
                <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                    >Settings</a>
                </p>
                <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                    >Orders</a>
                </p>
                <p>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                    >Help</a>
                </p>
            </div>

            


            {/* Address details */}
            <div>
                <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
                </h6>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                <box-icon name='home' ></box-icon>
                : Wanduragala, Kurunegala ,SL
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                <box-icon name='envelope' ></box-icon>
                : flora@info.com
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                <box-icon name='phone-call' ></box-icon>
                : + 01 234 567 88
                </p>
                <p className="flex items-center justify-center md:justify-start">
                <box-icon name='phone-call' ></box-icon>
                : + 01 234 567 89
                </p>
            </div>
            </div>
        </div>

        <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
            <span>© 2024 Copyright: </span>
            <a
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            href=""
            >ITP Project - T007</a>
        </div>
        </footer>
    </div>
  )
}
