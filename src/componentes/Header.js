import { Recursos } from "../page/recursos/recursos";
export function Header() {
    return `
            <header
                class="fixed top-4 left-72 right-4 ml-6 h-14 bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl px-6 z-40">

            <div class="flex h-full items-center justify-between">

                <div class="h-full flex-1 flex items-center border-r border-slate-700 px-8">
                    <div class="flex items-center gap-3 w-full">

                        <span class="text-sm font-bold tracking-widest text-cyan-50 uppercase whitespace-nowrap">
                            Progreso Global
                        </span>

                        <div class="flex-1 bg-slate-950 h-2 rounded-full border border-slate-800 overflow-hidden p-px">
                            <div
                                class="bg-linear-to-r from-lime-500 to-blue-900 h-full rounded-full"
                                style="width:62%">
                            </div>
                        </div>

                        <span class="text-sm font-mono font-bold text-lime-500">
                            62%
                        </span>

                    </div>
                </div>

                <div class="h-full flex items-center justify-center shrink-0"> <div class="flex items-center gap-3 pl-4 pr-4">
                        <span class="text-sm font-bold tracking-widest text-cyan-50 uppercase">
                            Monedas:
                        </span>

                        <div class="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
                            <span class="text-sm font-black text-emerald-400 font-mono">
                                ${new Recursos().getMonedas()}
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                class="w-4 h-4 text-emerald-400">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 18 9 11.25l4.306 4.306 1.748-1.748 4.392 4.392m-.001 0h-4.662m4.663 0v-4.662M12 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    `;
}