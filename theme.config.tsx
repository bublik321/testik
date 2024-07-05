import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const logo = (
  <svg
    width="139"
    height="42"
    viewBox="0 0 139 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_109_16)">
      <path
        d="M12.7838 29V15H20.7638C21.9904 15 23.0238 15.14 23.8638 15.42C24.7171 15.7 25.3571 16.0933 25.7838 16.6C26.2104 17.1067 26.4238 17.72 26.4238 18.44C26.4238 19.2133 26.1904 19.88 25.7238 20.44C25.2571 20.9867 24.5504 21.3667 23.6038 21.58L23.7038 21.22C24.3038 21.3533 24.8638 21.5667 25.3838 21.86C25.9171 22.14 26.3438 22.52 26.6638 23C26.9971 23.48 27.1638 24.0667 27.1638 24.76C27.1638 25.6133 26.9838 26.3133 26.6238 26.86C26.2638 27.4067 25.7904 27.84 25.2038 28.16C24.6171 28.4667 23.9771 28.6867 23.2838 28.82C22.6038 28.94 21.9371 29 21.2838 29H12.7838ZM15.9838 26.16H21.3638C21.8304 26.16 22.2438 26.1067 22.6038 26C22.9771 25.8933 23.2704 25.7267 23.4838 25.5C23.7104 25.26 23.8238 24.96 23.8238 24.6C23.8238 24.1867 23.6838 23.8733 23.4038 23.66C23.1238 23.4333 22.7838 23.28 22.3838 23.2C21.9838 23.1067 21.6104 23.06 21.2638 23.06H15.9838V26.16ZM15.9838 20.5H20.8038C21.2438 20.5 21.6304 20.4467 21.9638 20.34C22.3104 20.2333 22.5771 20.08 22.7638 19.88C22.9638 19.68 23.0638 19.4267 23.0638 19.12C23.0638 18.6533 22.8304 18.3267 22.3638 18.14C21.9104 17.94 21.3504 17.84 20.6838 17.84H15.9838V20.5ZM40.3367 29.12C38.8434 29.12 37.5434 28.8267 36.4367 28.24C35.3301 27.6533 34.4701 26.8467 33.8567 25.82C33.2434 24.7933 32.9367 23.62 32.9367 22.3V15H36.3767V22.22C36.3767 22.98 36.5434 23.6533 36.8767 24.24C37.2234 24.8267 37.6967 25.2867 38.2967 25.62C38.8967 25.94 39.5767 26.1 40.3367 26.1C41.1234 26.1 41.8167 25.94 42.4167 25.62C43.0301 25.2867 43.5101 24.8267 43.8567 24.24C44.2167 23.6533 44.3967 22.98 44.3967 22.22V15H47.7167V22.3C47.7167 23.62 47.4101 24.7933 46.7967 25.82C46.1834 26.8467 45.3234 27.6533 44.2167 28.24C43.1101 28.8267 41.8167 29.12 40.3367 29.12ZM54.4634 29V15H62.4434C63.6701 15 64.7034 15.14 65.5434 15.42C66.3968 15.7 67.0368 16.0933 67.4634 16.6C67.8901 17.1067 68.1034 17.72 68.1034 18.44C68.1034 19.2133 67.8701 19.88 67.4034 20.44C66.9368 20.9867 66.2301 21.3667 65.2834 21.58L65.3834 21.22C65.9834 21.3533 66.5434 21.5667 67.0634 21.86C67.5968 22.14 68.0234 22.52 68.3434 23C68.6768 23.48 68.8434 24.0667 68.8434 24.76C68.8434 25.6133 68.6634 26.3133 68.3034 26.86C67.9434 27.4067 67.4701 27.84 66.8834 28.16C66.2968 28.4667 65.6568 28.6867 64.9634 28.82C64.2834 28.94 63.6168 29 62.9634 29H54.4634ZM57.6634 26.16H63.0434C63.5101 26.16 63.9234 26.1067 64.2834 26C64.6568 25.8933 64.9501 25.7267 65.1634 25.5C65.3901 25.26 65.5034 24.96 65.5034 24.6C65.5034 24.1867 65.3634 23.8733 65.0834 23.66C64.8034 23.4333 64.4634 23.28 64.0634 23.2C63.6634 23.1067 63.2901 23.06 62.9434 23.06H57.6634V26.16ZM57.6634 20.5H62.4834C62.9234 20.5 63.3101 20.4467 63.6434 20.34C63.9901 20.2333 64.2568 20.08 64.4434 19.88C64.6434 19.68 64.7434 19.4267 64.7434 19.12C64.7434 18.6533 64.5101 18.3267 64.0434 18.14C63.5901 17.94 63.0301 17.84 62.3634 17.84H57.6634V20.5ZM74.7564 29V15H78.1564V26H87.1964V29H74.7564ZM93.3205 29V26H97.0805V18H93.3205V15H104.26V18H100.48V26H104.26V29H93.3205ZM113.754 25.66L112.994 22.76L122.914 15H127.294L113.754 25.66ZM111.534 29V15H114.934V29H111.534ZM123.134 29L117.154 21.74L119.194 19.42L127.274 29H123.134Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_109_16">
        <rect width="139" height="42" fill="white" />
      </clipPath>
    </defs>
    <style jsx>{`
      svg {
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      svg:hover {
        mask-position: 100%;
        transition:
          mask-position 1s ease,
          -webkit-mask-position 1s ease;
      }
    `}</style>
  </svg>
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/voutuk",
  },
  chat: {
    link: "https://t.me/oodnj",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5654 24.5654C19.1928 24.5654 24.5654 19.1928 24.5654 12.5654C24.5654 5.93801 19.1928 0.56543 12.5654 0.56543C5.93801 0.56543 0.56543 5.93801 0.56543 12.5654C0.56543 19.1928 5.93801 24.5654 12.5654 24.5654Z"
          fill="url(#paint0_linear_10_62)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.99744 12.4394C9.49569 10.9152 11.8284 9.91044 12.9956 9.42497C16.3281 8.03886 17.0206 7.79807 17.4719 7.79012C17.5712 7.78838 17.7931 7.81298 17.9369 7.92964C18.0583 8.02815 18.0917 8.16122 18.1077 8.25461C18.1237 8.34801 18.1436 8.56077 18.1278 8.72702C17.9472 10.6245 17.1658 15.2292 16.7682 17.3544C16.6 18.2537 16.2688 18.5552 15.9481 18.5847C15.2513 18.6488 14.7221 18.1242 14.0472 17.6817C12.991 16.9894 12.3943 16.5584 11.3692 15.8828C10.1844 15.1021 10.9524 14.673 11.6276 13.9717C11.8043 13.7882 14.8747 10.9954 14.9342 10.742C14.9416 10.7104 14.9485 10.5923 14.8783 10.5299C14.8082 10.4675 14.7046 10.4889 14.6299 10.5058C14.5239 10.5299 12.8367 11.645 9.56819 13.8514C9.08928 14.1802 8.65549 14.3405 8.26684 14.3321C7.83838 14.3228 7.01419 14.0898 6.40149 13.8907C5.64999 13.6464 5.05271 13.5172 5.10472 13.1024C5.13181 12.8863 5.42938 12.6653 5.99744 12.4394Z"
          fill="black"
        />
        <defs>
          <linearGradient
            id="paint0_linear_10_62"
            x1="12.5654"
            y1="0.56543"
            x2="12.5654"
            y2="24.3874"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },

  docsRepositoryBase: "https://github.com/voutuk/site",
  logo,
  head: function useHead() {
    const config = useConfig();
    const { route } = useRouter();
    const isDefault = route === "/" || !config.title;
    const image =
      "https://nextra.site/" +
      (isDefault ? "og.jpeg" : `api/og?title=${config.title}`);

    const description = config.frontMatter.description || "Bublik";
    const title = config.title + (route === "/" ? "" : " - Bublik");

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#000" />
        <meta httpEquiv="Content-Language" content="ua" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta name="apple-mobile-web-app-title" content="Bublik" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  editLink: {
    content: "",
  },
  toc: {
    backToTop: true,
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  footer: {
    content: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="vercel.com homepage"
            href="https://vercel.com?utm_source=nextra.site"
          >
            <span>Powered by</span>
            <svg height={20} viewBox="0 0 283 64" fill="none">
              <title>Vercel</title>
              <path
                fill="currentColor"
                d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
              />
            </svg>
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Bublik / Nextra.
        </p>
      </div>
    ),
  },
};

export default config;
