
build() {
    npx tsc
    npx webpack --env.NODE_ENV=development
}

layout() {
    rm -rf ./_dist
    mkdir -p ./_dist
    npx tsc --outDir ./_dist
    npx webpack --env.NODE_ENV=production
}

"$@"