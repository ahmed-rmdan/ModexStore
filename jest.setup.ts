


import "@testing-library/jest-dom";

import { TextEncoder, TextDecoder } from "util";

(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;
console.log("✅ jest.setup.ts loaded!");