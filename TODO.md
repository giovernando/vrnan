# Fix Prettier/ESLint Build Errors for Deployment

## Plan Status

✅ Plan approved by user

## TODO Steps

### 1. Fix src/pages/components/projects/Index.jsx (7 Prettier errors) ✅

- [x] Line 69: ref/className single line
- [x] Line 75: Link props single line
- [x] Lines 87/94: Ternary height expressions single line
- [x] Line 109: Image props single line
- [x] Line 118: div ref/className single line
- [x] Line 122: Image props single line

### 2. Fix src/pages/projects/[id].page.jsx ✅

- [x] Add setFluidColor to useEffect deps
- [x] Fix "Project not found" newlines

### 3. Fix src/pages/projects/index.page.jsx ✅

- [x] Line 110: Insert 2 spaces indentation

### 4. Test fixes

- [x] Run `npm run build`
- [ ] More Prettier errors found (projects files + clients/Index.jsx + new lines)

### 4.1 Additional Prettier fixes

- [ ] src/pages/components/projects/Index.jsx remaining
- [ ] src/pages/projects/index.page.jsx remaining
- [ ] src/pages/projects/[id].page.jsx new errors
- [ ] src/pages/components/clients/Index.jsx all errors

### 5. Re-test build

- [ ] npm run build clean

### 6. Complete

- [ ] Run `npm run build`
- [ ] Verify clean build

### 5. Complete

- [ ] attempt_completion

**Next step: Execute step 1**
