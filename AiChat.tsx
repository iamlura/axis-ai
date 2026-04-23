import svgPaths from "./svg-b1vmomj8vg";

export default function AiChat() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] overflow-clip relative rounded-[100px] size-full" data-name="ai chat">
      <div className="absolute content-stretch flex gap-[27px] items-center left-[23px] py-[5.545px] top-[10.96px]" data-name="Search Bar">
        <div className="flex items-center justify-center relative shrink-0 size-[34.03px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none rotate-45">
            <div className="relative size-[24.063px]" data-name="Search Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0629 24.0635">
                <g id="Search Icon">
                  <path d={svgPaths.p33a1dc00} fill="var(--fill-0, black)" id="Intersect" />
                  <path d={svgPaths.p39a9b00} fill="var(--fill-0, black)" id="Intersect_2" />
                  <path d={svgPaths.p20a79300} fill="var(--fill-0, black)" id="Intersect_3" />
                  <path d={svgPaths.p152c4380} fill="var(--fill-0, black)" id="Intersect_4" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center relative shrink-0" data-name="Search Text">
          <div className="flex flex-col font-['Forma_DJR_UI:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
            <p className="font-['Google Sans Flex',sans-serif] not-italic text-[24.951px]">
              <span className="leading-[1.5]">|</span>
              <span className="leading-[1.5] text-black">Ask Anything</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-center left-[646.18px] top-[7.43px]" data-name="Utilities">
        <div className="content-stretch flex items-center p-[13.862px] relative shrink-0" data-name="Utility Icon">
          <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 size-[27.724px]" data-name="attach_file">
            <div className="overflow-clip relative shrink-0 size-[27.724px]" data-name="Icon">
              <div className="absolute inset-[4.17%_27.08%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7068 25.4135">
                  <path d={svgPaths.p1451e200} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative rounded-[499.029px] shrink-0 size-[52.675px]" data-name="Utility Icon">
          <div className="overflow-clip relative shrink-0 size-[38.813px]" data-name="Microphone">
            <div className="absolute h-[25.491px] left-[12.42px] top-[6.66px] w-[13.965px]" data-name="Microphone Outline">
              <div className="absolute inset-[0_-6.38%_-3.49%_-6.38%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7454 26.3804">
                  <g id="Microphone Outline">
                    <rect fill="var(--fill-0, black)" height="17.3484" id="Microphone Button" rx="4.33131" width="8.66262" x="3.54139" />
                    <path d={svgPaths.pe5ae380} id="Vector 638" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.78069" />
                    <path d={svgPaths.p20600280} id="Vector 639" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.78069" />
                    <path d={svgPaths.p20b1de00} id="Vector 640" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.78069" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative rounded-[499.029px] shrink-0 size-[52.675px]" data-name="Utility Icon">
          <div className="relative shrink-0 size-[32.601px]" data-name="Delta Forward">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.6015 32.6015">
              <g id="Delta Forward">
                <path d={svgPaths.p17253600} fill="var(--fill-0, black)" id="Rectangle 3473604" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}