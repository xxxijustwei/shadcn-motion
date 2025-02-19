import * as React from "react"
import { InputExample } from "./example/input"
import { CodeBlockExample } from "./example/code-block"
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
    return (
        <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
            <header className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
                <p className="text-muted-foreground">
                    A custom registry for distribution code using shadcn.
                </p>
            </header>
            <main className="flex flex-col flex-1 gap-8">
                <InputExample />
                <CodeBlockExample />
            </main>
        </div>
    )
}