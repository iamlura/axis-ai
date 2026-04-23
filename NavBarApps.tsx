import svgPaths from "./svg-x0iatcgqiv";

export default function NavBarApps() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex gap-[30px] items-center opacity-70 p-[8px] relative rounded-[50px] size-full" data-name="nav bar apps">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+134.91px)] size-[67.895px] top-1/2" data-name="select">
        <div className="absolute bg-black inset-0 rounded-[37px]" data-name="Icon background" />
      </div>
      <div className="overflow-clip relative shrink-0 size-[60px]" data-name="home">
        <div className="absolute h-[26.052px] left-[18.15px] top-[13.97px] w-[23.694px]" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6943 26.0525">
            <path d={svgPaths.p5c30780} fill="var(--fill-0, black)" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative rounded-[10px] shrink-0 size-[60px]" data-name="folder">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.517px] left-[calc(50%-0.04px)] top-[calc(50%-0.88px)] w-[27.961px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9609 20.5168">
            <path d={svgPaths.p2b67a400} fill="var(--fill-0, black)" id="Rectangle 3473639" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[60px]" data-name="settings">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[28.381px] left-[calc(50%+0.04px)] top-[calc(50%+0.49px)] w-[27.738px]" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.7376 28.3809">
            <path d={svgPaths.p2615da00} fill="var(--fill-0, black)" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative rounded-[10px] shrink-0 size-[60px]" data-name="apps">
        <div className="absolute border-3 border-solid border-white left-[13.82px] rounded-[18px] size-[32.18px] top-[13.82px]" />
        <div className="absolute left-[21.92px] size-[3.481px] top-[28.12px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.48093 3.48093">
            <circle cx="1.74047" cy="1.74047" fill="var(--fill-0, white)" id="Ellipse 91" r="1.24047" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
        <div className="absolute left-[28.29px] size-[3.481px] top-[28.12px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.48093 3.48093">
            <circle cx="1.74047" cy="1.74047" fill="var(--fill-0, white)" id="Ellipse 91" r="1.24047" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
        <div className="absolute left-[34.67px] size-[3.481px] top-[28.12px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.48093 3.48093">
            <circle cx="1.74047" cy="1.74047" fill="var(--fill-0, white)" id="Ellipse 91" r="1.24047" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
    </div>
  );
}