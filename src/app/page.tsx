"use client";

import { kainitex } from "../kainitex";
import { COMMAND_LATEX_MAP } from "./commandMap";

const TEST_CASES: Record<string, string | string[]> = COMMAND_LATEX_MAP;

export default function Home() {
    const entries = Object.entries(TEST_CASES);

    return (
        <main style={{ padding: "16px" }}>
            <h1>Kainitex Test Suite ({entries.length} Cases)</h1>

            <div style={{ marginBottom: "16px", padding: "10px 14px", border: "1px solid #ccc", borderRadius: "6px", display: "inline-block", background: "#fafafa" }}>
                <strong>MathML Element Type Legend: </strong>
                <span style={{ color: "#ec4899", fontWeight: "bold", marginLeft: "14px" }}>■ Operator (&lt;mo&gt;)</span>
                <span style={{ color: "#0284c7", fontWeight: "bold", marginLeft: "14px" }}>■ Identifier (&lt;mi&gt;)</span>
                <span style={{ color: "#d97706", fontWeight: "bold", marginLeft: "14px" }}>■ Number (&lt;mn&gt;)</span>
            </div>

            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Symbol Key</th>
                        <th>LaTeX Code</th>
                        <th>Rendered MathML</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.flatMap(([name, rawValue], symbolIdx) => {
                        const latexList = Array.isArray(rawValue) ? rawValue : [rawValue];

                        return latexList.map((latex, idx) => {
                            let rendered = "";
                            try {
                                rendered = kainitex(latex);
                            } catch (e: unknown) {
                                const message = e instanceof Error ? e.message : String(e);
                                rendered = `<span style="color: #ef4444;">Error: ${message}</span>`;
                            }

                            return (
                                <tr key={`${name}-${idx}`}>
                                    {idx === 0 && (
                                        <>
                                            <td align="center" rowSpan={latexList.length}>
                                                {symbolIdx + 1}
                                            </td>
                                            <td rowSpan={latexList.length}>
                                                <strong>{name}</strong>
                                            </td>
                                        </>
                                    )}
                                    <td>
                                        <code>{latex}</code>
                                    </td>
                                    <td>
                                        <div dangerouslySetInnerHTML={{ __html: rendered }} />
                                    </td>
                                </tr>
                            );
                        });
                    })}
                </tbody>
            </table>
        </main>
    );
}
