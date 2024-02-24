const Icons: {
  [key: string]: JSX.Element;
} = {
  youtube: (
    <svg
      width="28"
      height="25"
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="fa6-brands:youtube">
        <path
          id="Vector"
          d="M26.7194 6.05874C26.414 4.90396 25.5144 3.99448 24.3722 3.68584C22.3019 3.125 14 3.125 14 3.125C14 3.125 5.69821 3.125 3.62781 3.68584C2.4856 3.99453 1.586 4.90396 1.28067 6.05874C0.725922 8.15186 0.725922 12.5189 0.725922 12.5189C0.725922 12.5189 0.725922 16.886 1.28067 18.9792C1.586 20.1339 2.4856 21.0055 3.62781 21.3142C5.69821 21.875 14 21.875 14 21.875C14 21.875 22.3018 21.875 24.3722 21.3142C25.5144 21.0055 26.414 20.1339 26.7194 18.9792C27.2741 16.886 27.2741 12.5189 27.2741 12.5189C27.2741 12.5189 27.2741 8.15186 26.7194 6.05874ZM11.2848 16.4839V8.55395L18.2235 12.519L11.2848 16.4839Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <g id="fa6-brands:linkedin">
        <path
          fill="#0288D1"
          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
        ></path>
        <path
          fill="#FFF"
          d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
        ></path>
      </g>
    </svg>
  ),
  discord: (
    <svg
      width="25"
      height="20"
      viewBox="0 0 25 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="fa6-brands:discord">
        <path
          id="Vector"
          d="M20.4895 2.72796C20.4831 2.71559 20.4725 2.7059 20.4596 2.70062C18.9705 2.01736 17.3989 1.53015 15.7844 1.25116C15.7697 1.24844 15.7546 1.2504 15.7411 1.25679C15.7276 1.26317 15.7165 1.27364 15.7093 1.28671C15.4953 1.67511 15.301 2.07405 15.1273 2.48202C13.3869 2.21784 11.6166 2.21784 9.87624 2.48202C9.70131 2.07301 9.50394 1.67397 9.28503 1.28671C9.27753 1.27392 9.26634 1.26369 9.25294 1.25735C9.23953 1.25101 9.22453 1.24886 9.20988 1.25116C7.59518 1.52956 6.02356 2.01681 4.53456 2.70066C4.52182 2.70606 4.51106 2.71529 4.50378 2.72706C1.52609 7.17386 0.710385 11.5113 1.11054 15.7951C1.11167 15.8056 1.11489 15.8157 1.12003 15.825C1.12516 15.8342 1.1321 15.8423 1.14042 15.8488C2.87431 17.1326 4.81368 18.1125 6.87578 18.7468C6.8903 18.7511 6.9058 18.7509 6.92021 18.7462C6.93462 18.7415 6.94723 18.7325 6.95636 18.7204C7.39926 18.1178 7.79169 17.4796 8.12968 16.8125C8.13433 16.8033 8.13698 16.7933 8.13746 16.783C8.13795 16.7728 8.13625 16.7626 8.13249 16.753C8.12873 16.7435 8.12299 16.7348 8.11564 16.7276C8.1083 16.7205 8.09952 16.7149 8.08988 16.7114C7.47103 16.4746 6.87192 16.1892 6.29816 15.8578C6.28774 15.8516 6.27898 15.843 6.27267 15.8327C6.26636 15.8224 6.26268 15.8107 6.26197 15.7986C6.26126 15.7866 6.26352 15.7745 6.26858 15.7635C6.27363 15.7525 6.28131 15.743 6.29093 15.7357C6.41167 15.6455 6.5303 15.5525 6.64675 15.4569C6.65697 15.4485 6.66932 15.4431 6.68244 15.4413C6.69555 15.4395 6.7089 15.4415 6.72097 15.4469C10.4799 17.1624 14.5495 17.1624 18.2639 15.4469C18.276 15.4411 18.2895 15.4389 18.3028 15.4405C18.3161 15.4421 18.3287 15.4475 18.3391 15.456C18.4557 15.5521 18.5746 15.6454 18.6958 15.7357C18.7055 15.7429 18.7132 15.7524 18.7184 15.7633C18.7235 15.7743 18.7259 15.7863 18.7252 15.7984C18.7246 15.8105 18.721 15.8222 18.7148 15.8326C18.7085 15.8429 18.6999 15.8516 18.6895 15.8578C18.117 16.192 17.5174 16.4772 16.8969 16.7105C16.8873 16.7142 16.8785 16.7198 16.8712 16.7271C16.8639 16.7344 16.8582 16.7431 16.8546 16.7528C16.8509 16.7624 16.8493 16.7727 16.8498 16.783C16.8504 16.7933 16.8531 16.8033 16.8578 16.8125C17.2015 17.4759 17.5934 18.1132 18.0303 18.7193C18.0391 18.7318 18.0517 18.7411 18.0661 18.746C18.0806 18.7509 18.0963 18.7511 18.1109 18.7467C20.1766 18.1146 22.1194 17.1345 23.8555 15.8488C23.8639 15.8426 23.871 15.8347 23.8761 15.8256C23.8813 15.8165 23.8844 15.8064 23.8853 15.796C24.3644 10.8435 23.0833 6.54159 20.4895 2.72796ZM8.69105 13.1867C7.55933 13.1867 6.62683 12.1482 6.62683 10.8727C6.62683 9.59722 7.54124 8.55859 8.69105 8.55859C9.84984 8.55859 10.7733 9.60624 10.7552 10.8726C10.7552 12.1482 9.84078 13.1867 8.69105 13.1867ZM16.3231 13.1867C15.1914 13.1867 14.2589 12.1482 14.2589 10.8727C14.2589 9.59722 15.1733 8.55859 16.3231 8.55859C17.4819 8.55859 18.4054 9.60624 18.3873 10.8726C18.3873 12.1482 17.4819 13.1867 16.3231 13.1867Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  twitter: (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="fa6-brands:twitter">
        <path
          id="Vector"
          d="M23.3274 7.70433C23.3439 7.93528 23.3439 8.16629 23.3439 8.39724C23.3439 15.4416 17.9822 23.5584 8.18274 23.5584C5.16369 23.5584 2.35914 22.684 0 21.1663C0.428949 21.2157 0.841344 21.2323 1.2868 21.2323C3.77787 21.2323 6.07105 20.3909 7.90227 18.9556C5.55963 18.9061 3.59643 17.3719 2.92002 15.2602C3.25 15.3096 3.57993 15.3426 3.92641 15.3426C4.40482 15.3426 4.88328 15.2766 5.32868 15.1612C2.88707 14.6662 1.05579 12.5216 1.05579 9.93149V9.86553C1.76516 10.2615 2.5901 10.5089 3.4644 10.5419C2.02912 9.58501 1.0888 7.95179 1.0888 6.10406C1.0888 5.11423 1.35271 4.20687 1.81467 3.41499C4.43777 6.64849 8.38068 8.76012 12.802 8.99113C12.7195 8.59519 12.67 8.18279 12.67 7.77035C12.67 4.83377 15.0456 2.44167 17.9987 2.44167C19.5329 2.44167 20.9187 3.08506 21.8921 4.1244C23.0963 3.89345 24.2511 3.448 25.274 2.83761C24.878 4.07494 24.0367 5.11428 22.9314 5.77413C24.0037 5.65871 25.0431 5.36169 25.9999 4.94929C25.2741 6.00509 24.3667 6.9454 23.3274 7.70433Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  github: (
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="fa6-brands:github">
        <path
          id="Vector"
          d="M8.36417 20.1805C8.36417 20.282 8.24831 20.3633 8.10222 20.3633C7.93598 20.3785 7.82012 20.2973 7.82012 20.1805C7.82012 20.0789 7.93598 19.9977 8.08207 19.9977C8.23319 19.9824 8.36417 20.0637 8.36417 20.1805ZM6.7975 19.952C6.76223 20.0535 6.86298 20.1703 7.01411 20.2008C7.14509 20.2516 7.29621 20.2008 7.32644 20.0992C7.35666 19.9977 7.26095 19.8809 7.10982 19.8352C6.97885 19.7996 6.83276 19.8504 6.7975 19.952ZM9.02409 19.8656C8.878 19.9012 8.77725 19.9977 8.79236 20.1145C8.80747 20.216 8.93845 20.282 9.08958 20.2465C9.23566 20.2109 9.33641 20.1145 9.3213 20.0129C9.30619 19.9164 9.17018 19.8504 9.02409 19.8656ZM12.3388 0.40625C5.35172 0.40625 0.00689697 5.75352 0.00689697 12.7969C0.00689697 18.4285 3.5231 23.2477 8.54552 24.9438C9.19033 25.0605 9.41702 24.6594 9.41702 24.3293C9.41702 24.0145 9.4019 22.2777 9.4019 21.2113C9.4019 21.2113 5.87563 21.973 5.13511 19.698C5.13511 19.698 4.56083 18.2203 3.73467 17.8395C3.73467 17.8395 2.58108 17.0422 3.81527 17.0574C3.81527 17.0574 5.06962 17.159 5.75976 18.3676C6.86298 20.3277 8.71176 19.7641 9.43213 19.4289C9.54799 18.6164 9.87543 18.0527 10.2381 17.7176C7.42215 17.4027 4.58098 16.9914 4.58098 12.1062C4.58098 10.7098 4.96383 10.009 5.76984 9.11523C5.63886 8.78516 5.21067 7.42422 5.90082 5.66719C6.95366 5.33711 9.37672 7.03828 9.37672 7.03828C10.3842 6.75391 11.4673 6.60664 12.5403 6.60664C13.6133 6.60664 14.6964 6.75391 15.7039 7.03828C15.7039 7.03828 18.1269 5.33203 19.1798 5.66719C19.8699 7.4293 19.4417 8.78516 19.3107 9.11523C20.1167 10.0141 20.6104 10.7148 20.6104 12.1062C20.6104 17.0066 17.6433 17.3977 14.8273 17.7176C15.2908 18.1187 15.6837 18.8805 15.6837 20.0738C15.6837 21.7852 15.6686 23.9027 15.6686 24.3191C15.6686 24.6492 15.9003 25.0504 16.5401 24.9336C21.5776 23.2477 24.9931 18.4285 24.9931 12.7969C24.9931 5.75352 19.3259 0.40625 12.3388 0.40625ZM4.90338 17.9207C4.83789 17.9715 4.85301 18.0883 4.93865 18.1848C5.01925 18.266 5.13511 18.3016 5.2006 18.2355C5.26609 18.1848 5.25097 18.068 5.16533 17.9715C5.08473 17.8902 4.96887 17.8547 4.90338 17.9207ZM4.35933 17.5094C4.32407 17.5754 4.37444 17.6566 4.47519 17.7074C4.55579 17.7582 4.65654 17.743 4.69181 17.6719C4.72707 17.6059 4.67669 17.5246 4.57594 17.4738C4.47519 17.4434 4.39459 17.4586 4.35933 17.5094ZM5.99149 19.3172C5.91089 19.3832 5.94112 19.5355 6.05698 19.632C6.17284 19.7488 6.31893 19.7641 6.38442 19.6828C6.44991 19.6168 6.41968 19.4645 6.31893 19.368C6.2081 19.2512 6.05698 19.2359 5.99149 19.3172ZM5.41721 18.5707C5.33661 18.6215 5.33661 18.7535 5.41721 18.8703C5.49781 18.9871 5.63383 19.0379 5.69931 18.9871C5.77991 18.9211 5.77991 18.7891 5.69931 18.6723C5.62879 18.5555 5.49781 18.5047 5.41721 18.5707Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  udemy: (
    <svg
      width="14"
      height="27"
      viewBox="0 0 14 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="udemy-seeklogo.com 1" clipPath="url(#clip0_4_373)">
        <path
          id="Vector"
          d="M0.00101681 8.04051L7.00153 4.02059L14 8.04051V4.02059L7.00051 0.000671387L-6.59503e-07 4.02059V8.04051H0.00101681Z"
          fill="#A435F0"
        />
        <path
          id="Vector_2"
          d="M14 11.4163H10.3332V20.2777C10.3332 22.5671 8.61463 23.6833 7.00051 23.6833C5.37248 23.6833 3.66645 22.5374 3.66645 20.2469V11.4163H-6.59503e-07V20.489C-6.59503e-07 22.5978 0.666472 24.2253 1.99976 25.3412C3.33372 26.4564 4.99973 26.9995 7.03137 26.9995C9.06098 26.9995 10.728 26.4574 12.0301 25.3412C13.3335 24.2264 14 22.6592 14 20.5791V11.4163Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_373">
          <rect
            width="14"
            height="27"
            fill="white"
            transform="matrix(-1 0 0 1 14 0)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  paypal: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <g id="Frame" clipPath="url(#clip0_4_330)">
        <path
          fill="#1565C0"
          d="M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z"
        ></path>
        <path
          fill="#039BE5"
          d="M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102C42.18,16.106,37.358,13.019,33.183,12.994z"
        ></path>
        <path
          fill="#283593"
          d="M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882C33.166,12.993,33.148,13,33.132,13H19.66z"
        ></path>
      </g>
    </svg>
  ),
  hackerrank: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 32 32"
    >
      <path d="M 15.998047 3 C 14.225047 3 5.5352031 7.9839062 4.6582031 9.5039062 C 3.7802031 11.024906 3.7802031 20.983047 4.6582031 22.498047 C 5.5392031 24.017047 14.229047 29 15.998047 29 C 17.762047 29 26.451938 24.019953 27.335938 22.501953 C 28.222938 20.979953 28.222938 11.014047 27.335938 9.4980469 L 27.335938 9.4960938 C 26.444937 7.9790937 17.756047 3 15.998047 3 z M 15.996094 5.0117188 C 17.693094 5.3647187 24.417703 9.2167656 25.595703 10.509766 C 26.135703 12.150766 26.134703 19.844281 25.595703 21.488281 C 24.425703 22.779281 17.695094 26.636281 15.996094 26.988281 C 14.298094 26.638281 7.5723906 22.783234 6.4003906 21.490234 C 5.8653906 19.842234 5.8653906 12.155766 6.4003906 10.509766 C 7.5693906 9.2167656 14.297094 5.3617187 15.996094 5.0117188 z M 13 9 L 11 11 L 12 11 L 12 21 L 14 21 L 14 17 L 18 17 L 18 21 L 17 21 L 19 23 L 21 21 L 20 21 L 20 12 L 18 12 L 18 15 L 14 15 L 14 11 L 15 11 L 13 9 z"></path>
    </svg>
  ),
  medium: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
    >
      <path d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"></path>
    </svg>
  ),
  gcp: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#1976d2"
        d="M38.193,18.359c-0.771-2.753-2.319-5.177-4.397-7.03l-4.598,4.598	c1.677,1.365,2.808,3.374,3.014,5.648v1.508c0.026,0,0.05-0.008,0.076-0.008c2.322,0,4.212,1.89,4.212,4.212S34.61,31.5,32.288,31.5	c-0.026,0-0.05-0.007-0.076-0.008V31.5h-6.666H24V38h8.212v-0.004c0.026,0,0.05,0.004,0.076,0.004C38.195,38,43,33.194,43,27.288	C43,23.563,41.086,20.279,38.193,18.359z"
      ></path>
      <path
        fill="#ffe082"
        d="M19.56,25.59l4.72-4.72c-0.004-0.005-0.008-0.009-0.011-0.013l-4.717,4.717	C19.554,25.579,19.557,25.584,19.56,25.59z"
        opacity=".5"
      ></path>
      <path
        fill="#90caf9"
        d="M19.56,25.59l4.72-4.72c-0.004-0.005-0.008-0.009-0.011-0.013l-4.717,4.717	C19.554,25.579,19.557,25.584,19.56,25.59z"
        opacity=".5"
      ></path>
      <path
        fill="#ff3d00"
        d="M24,7.576c-8.133,0-14.75,6.617-14.75,14.75c0,0.233,0.024,0.46,0.035,0.69h6.5	c-0.019-0.228-0.035-0.457-0.035-0.69c0-4.549,3.701-8.25,8.25-8.25c1.969,0,3.778,0.696,5.198,1.851l4.598-4.598	C31.188,9.003,27.761,7.576,24,7.576z"
      ></path>
      <path
        fill="#90caf9"
        d="M15.712,31.5L15.712,31.5c-0.001,0-0.001,0-0.002,0c-0.611,0-1.188-0.137-1.712-0.373	l-4.71,4.71C11.081,37.188,13.301,38,15.71,38c0.001,0,0.001,0,0.002,0v0H24v-6.5H15.712z"
        opacity=".5"
      ></path>
      <path
        fill="#4caf50"
        d="M15.712,31.5L15.712,31.5c-0.001,0-0.001,0-0.002,0c-0.611,0-1.188-0.137-1.712-0.373l-4.71,4.71	C11.081,37.188,13.301,38,15.71,38c0.001,0,0.001,0,0.002,0v0H24v-6.5H15.712z"
      ></path>
      <path
        fill="#ffc107"
        d="M11.5,27.29c0-2.32,1.89-4.21,4.21-4.21c1.703,0,3.178,1.023,3.841,2.494l4.717-4.717	c-1.961-2.602-5.065-4.277-8.559-4.277C9.81,16.58,5,21.38,5,27.29c0,3.491,1.691,6.59,4.288,8.547l4.71-4.71	C12.53,30.469,11.5,28.999,11.5,27.29z"
      ></path>
    </svg>
  ),
};

const Icon = ({ type, color = "#fff" }: { type: string; color?: string }) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`w-10 h-10 flex items-center justify-center rounded-lg shadow-grid shrink-0`}
    >
      {Icons[type]}
    </div>
  );
};

export default Icon;
