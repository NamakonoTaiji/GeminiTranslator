/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@google/generative-ai/dist/index.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@google/generative-ai/dist/index.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockReason: () => (/* binding */ BlockReason),
/* harmony export */   ChatSession: () => (/* binding */ ChatSession),
/* harmony export */   DynamicRetrievalMode: () => (/* binding */ DynamicRetrievalMode),
/* harmony export */   ExecutableCodeLanguage: () => (/* binding */ ExecutableCodeLanguage),
/* harmony export */   FinishReason: () => (/* binding */ FinishReason),
/* harmony export */   FunctionCallingMode: () => (/* binding */ FunctionCallingMode),
/* harmony export */   GenerativeModel: () => (/* binding */ GenerativeModel),
/* harmony export */   GoogleGenerativeAI: () => (/* binding */ GoogleGenerativeAI),
/* harmony export */   GoogleGenerativeAIAbortError: () => (/* binding */ GoogleGenerativeAIAbortError),
/* harmony export */   GoogleGenerativeAIError: () => (/* binding */ GoogleGenerativeAIError),
/* harmony export */   GoogleGenerativeAIFetchError: () => (/* binding */ GoogleGenerativeAIFetchError),
/* harmony export */   GoogleGenerativeAIRequestInputError: () => (/* binding */ GoogleGenerativeAIRequestInputError),
/* harmony export */   GoogleGenerativeAIResponseError: () => (/* binding */ GoogleGenerativeAIResponseError),
/* harmony export */   HarmBlockThreshold: () => (/* binding */ HarmBlockThreshold),
/* harmony export */   HarmCategory: () => (/* binding */ HarmCategory),
/* harmony export */   HarmProbability: () => (/* binding */ HarmProbability),
/* harmony export */   Outcome: () => (/* binding */ Outcome),
/* harmony export */   POSSIBLE_ROLES: () => (/* binding */ POSSIBLE_ROLES),
/* harmony export */   SchemaType: () => (/* binding */ SchemaType),
/* harmony export */   TaskType: () => (/* binding */ TaskType)
/* harmony export */ });
/**
 * Contains the list of OpenAPI data types
 * as defined by https://swagger.io/docs/specification/data-models/data-types/
 * @public
 */
var SchemaType;
(function (SchemaType) {
    /** String type. */
    SchemaType["STRING"] = "string";
    /** Number type. */
    SchemaType["NUMBER"] = "number";
    /** Integer type. */
    SchemaType["INTEGER"] = "integer";
    /** Boolean type. */
    SchemaType["BOOLEAN"] = "boolean";
    /** Array type. */
    SchemaType["ARRAY"] = "array";
    /** Object type. */
    SchemaType["OBJECT"] = "object";
})(SchemaType || (SchemaType = {}));

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @public
 */
var ExecutableCodeLanguage;
(function (ExecutableCodeLanguage) {
    ExecutableCodeLanguage["LANGUAGE_UNSPECIFIED"] = "language_unspecified";
    ExecutableCodeLanguage["PYTHON"] = "python";
})(ExecutableCodeLanguage || (ExecutableCodeLanguage = {}));
/**
 * Possible outcomes of code execution.
 * @public
 */
var Outcome;
(function (Outcome) {
    /**
     * Unspecified status. This value should not be used.
     */
    Outcome["OUTCOME_UNSPECIFIED"] = "outcome_unspecified";
    /**
     * Code execution completed successfully.
     */
    Outcome["OUTCOME_OK"] = "outcome_ok";
    /**
     * Code execution finished but with a failure. `stderr` should contain the
     * reason.
     */
    Outcome["OUTCOME_FAILED"] = "outcome_failed";
    /**
     * Code execution ran for too long, and was cancelled. There may or may not
     * be a partial output present.
     */
    Outcome["OUTCOME_DEADLINE_EXCEEDED"] = "outcome_deadline_exceeded";
})(Outcome || (Outcome = {}));

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Possible roles.
 * @public
 */
const POSSIBLE_ROLES = ["user", "model", "function", "system"];
/**
 * Harm categories that would cause prompts or candidates to be blocked.
 * @public
 */
var HarmCategory;
(function (HarmCategory) {
    HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
    HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
    HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
    HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
    HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
    HarmCategory["HARM_CATEGORY_CIVIC_INTEGRITY"] = "HARM_CATEGORY_CIVIC_INTEGRITY";
})(HarmCategory || (HarmCategory = {}));
/**
 * Threshold above which a prompt or candidate will be blocked.
 * @public
 */
var HarmBlockThreshold;
(function (HarmBlockThreshold) {
    /** Threshold is unspecified. */
    HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
    /** Content with NEGLIGIBLE will be allowed. */
    HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
    /** Content with NEGLIGIBLE and LOW will be allowed. */
    HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    /** Content with NEGLIGIBLE, LOW, and MEDIUM will be allowed. */
    HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    /** All content will be allowed. */
    HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
})(HarmBlockThreshold || (HarmBlockThreshold = {}));
/**
 * Probability that a prompt or candidate matches a harm category.
 * @public
 */
var HarmProbability;
(function (HarmProbability) {
    /** Probability is unspecified. */
    HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
    /** Content has a negligible chance of being unsafe. */
    HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
    /** Content has a low chance of being unsafe. */
    HarmProbability["LOW"] = "LOW";
    /** Content has a medium chance of being unsafe. */
    HarmProbability["MEDIUM"] = "MEDIUM";
    /** Content has a high chance of being unsafe. */
    HarmProbability["HIGH"] = "HIGH";
})(HarmProbability || (HarmProbability = {}));
/**
 * Reason that a prompt was blocked.
 * @public
 */
var BlockReason;
(function (BlockReason) {
    // A blocked reason was not specified.
    BlockReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
    // Content was blocked by safety settings.
    BlockReason["SAFETY"] = "SAFETY";
    // Content was blocked, but the reason is uncategorized.
    BlockReason["OTHER"] = "OTHER";
})(BlockReason || (BlockReason = {}));
/**
 * Reason that a candidate finished.
 * @public
 */
var FinishReason;
(function (FinishReason) {
    // Default value. This value is unused.
    FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
    // Natural stop point of the model or provided stop sequence.
    FinishReason["STOP"] = "STOP";
    // The maximum number of tokens as specified in the request was reached.
    FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
    // The candidate content was flagged for safety reasons.
    FinishReason["SAFETY"] = "SAFETY";
    // The candidate content was flagged for recitation reasons.
    FinishReason["RECITATION"] = "RECITATION";
    // The candidate content was flagged for using an unsupported language.
    FinishReason["LANGUAGE"] = "LANGUAGE";
    // Token generation stopped because the content contains forbidden terms.
    FinishReason["BLOCKLIST"] = "BLOCKLIST";
    // Token generation stopped for potentially containing prohibited content.
    FinishReason["PROHIBITED_CONTENT"] = "PROHIBITED_CONTENT";
    // Token generation stopped because the content potentially contains Sensitive Personally Identifiable Information (SPII).
    FinishReason["SPII"] = "SPII";
    // The function call generated by the model is invalid.
    FinishReason["MALFORMED_FUNCTION_CALL"] = "MALFORMED_FUNCTION_CALL";
    // Unknown reason.
    FinishReason["OTHER"] = "OTHER";
})(FinishReason || (FinishReason = {}));
/**
 * Task type for embedding content.
 * @public
 */
var TaskType;
(function (TaskType) {
    TaskType["TASK_TYPE_UNSPECIFIED"] = "TASK_TYPE_UNSPECIFIED";
    TaskType["RETRIEVAL_QUERY"] = "RETRIEVAL_QUERY";
    TaskType["RETRIEVAL_DOCUMENT"] = "RETRIEVAL_DOCUMENT";
    TaskType["SEMANTIC_SIMILARITY"] = "SEMANTIC_SIMILARITY";
    TaskType["CLASSIFICATION"] = "CLASSIFICATION";
    TaskType["CLUSTERING"] = "CLUSTERING";
})(TaskType || (TaskType = {}));
/**
 * @public
 */
var FunctionCallingMode;
(function (FunctionCallingMode) {
    // Unspecified function calling mode. This value should not be used.
    FunctionCallingMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Default model behavior, model decides to predict either a function call
    // or a natural language repspose.
    FunctionCallingMode["AUTO"] = "AUTO";
    // Model is constrained to always predicting a function call only.
    // If "allowed_function_names" are set, the predicted function call will be
    // limited to any one of "allowed_function_names", else the predicted
    // function call will be any one of the provided "function_declarations".
    FunctionCallingMode["ANY"] = "ANY";
    // Model will not predict any function call. Model behavior is same as when
    // not passing any function declarations.
    FunctionCallingMode["NONE"] = "NONE";
})(FunctionCallingMode || (FunctionCallingMode = {}));
/**
 * The mode of the predictor to be used in dynamic retrieval.
 * @public
 */
var DynamicRetrievalMode;
(function (DynamicRetrievalMode) {
    // Unspecified function calling mode. This value should not be used.
    DynamicRetrievalMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Run retrieval only when system decides it is necessary.
    DynamicRetrievalMode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
})(DynamicRetrievalMode || (DynamicRetrievalMode = {}));

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Basic error type for this SDK.
 * @public
 */
class GoogleGenerativeAIError extends Error {
    constructor(message) {
        super(`[GoogleGenerativeAI Error]: ${message}`);
    }
}
/**
 * Errors in the contents of a response from the model. This includes parsing
 * errors, or responses including a safety block reason.
 * @public
 */
class GoogleGenerativeAIResponseError extends GoogleGenerativeAIError {
    constructor(message, response) {
        super(message);
        this.response = response;
    }
}
/**
 * Error class covering HTTP errors when calling the server. Includes HTTP
 * status, statusText, and optional details, if provided in the server response.
 * @public
 */
class GoogleGenerativeAIFetchError extends GoogleGenerativeAIError {
    constructor(message, status, statusText, errorDetails) {
        super(message);
        this.status = status;
        this.statusText = statusText;
        this.errorDetails = errorDetails;
    }
}
/**
 * Errors in the contents of a request originating from user input.
 * @public
 */
class GoogleGenerativeAIRequestInputError extends GoogleGenerativeAIError {
}
/**
 * Error thrown when a request is aborted, either due to a timeout or
 * intentional cancellation by the user.
 * @public
 */
class GoogleGenerativeAIAbortError extends GoogleGenerativeAIError {
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_BASE_URL = "https://generativelanguage.googleapis.com";
const DEFAULT_API_VERSION = "v1beta";
/**
 * We can't `require` package.json if this runs on web. We will use rollup to
 * swap in the version number here at build time.
 */
const PACKAGE_VERSION = "0.24.1";
const PACKAGE_LOG_HEADER = "genai-js";
var Task;
(function (Task) {
    Task["GENERATE_CONTENT"] = "generateContent";
    Task["STREAM_GENERATE_CONTENT"] = "streamGenerateContent";
    Task["COUNT_TOKENS"] = "countTokens";
    Task["EMBED_CONTENT"] = "embedContent";
    Task["BATCH_EMBED_CONTENTS"] = "batchEmbedContents";
})(Task || (Task = {}));
class RequestUrl {
    constructor(model, task, apiKey, stream, requestOptions) {
        this.model = model;
        this.task = task;
        this.apiKey = apiKey;
        this.stream = stream;
        this.requestOptions = requestOptions;
    }
    toString() {
        var _a, _b;
        const apiVersion = ((_a = this.requestOptions) === null || _a === void 0 ? void 0 : _a.apiVersion) || DEFAULT_API_VERSION;
        const baseUrl = ((_b = this.requestOptions) === null || _b === void 0 ? void 0 : _b.baseUrl) || DEFAULT_BASE_URL;
        let url = `${baseUrl}/${apiVersion}/${this.model}:${this.task}`;
        if (this.stream) {
            url += "?alt=sse";
        }
        return url;
    }
}
/**
 * Simple, but may become more complex if we add more versions to log.
 */
function getClientHeaders(requestOptions) {
    const clientHeaders = [];
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.apiClient) {
        clientHeaders.push(requestOptions.apiClient);
    }
    clientHeaders.push(`${PACKAGE_LOG_HEADER}/${PACKAGE_VERSION}`);
    return clientHeaders.join(" ");
}
async function getHeaders(url) {
    var _a;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-goog-api-client", getClientHeaders(url.requestOptions));
    headers.append("x-goog-api-key", url.apiKey);
    let customHeaders = (_a = url.requestOptions) === null || _a === void 0 ? void 0 : _a.customHeaders;
    if (customHeaders) {
        if (!(customHeaders instanceof Headers)) {
            try {
                customHeaders = new Headers(customHeaders);
            }
            catch (e) {
                throw new GoogleGenerativeAIRequestInputError(`unable to convert customHeaders value ${JSON.stringify(customHeaders)} to Headers: ${e.message}`);
            }
        }
        for (const [headerName, headerValue] of customHeaders.entries()) {
            if (headerName === "x-goog-api-key") {
                throw new GoogleGenerativeAIRequestInputError(`Cannot set reserved header name ${headerName}`);
            }
            else if (headerName === "x-goog-api-client") {
                throw new GoogleGenerativeAIRequestInputError(`Header name ${headerName} can only be set using the apiClient field`);
            }
            headers.append(headerName, headerValue);
        }
    }
    return headers;
}
async function constructModelRequest(model, task, apiKey, stream, body, requestOptions) {
    const url = new RequestUrl(model, task, apiKey, stream, requestOptions);
    return {
        url: url.toString(),
        fetchOptions: Object.assign(Object.assign({}, buildFetchOptions(requestOptions)), { method: "POST", headers: await getHeaders(url), body }),
    };
}
async function makeModelRequest(model, task, apiKey, stream, body, requestOptions = {}, 
// Allows this to be stubbed for tests
fetchFn = fetch) {
    const { url, fetchOptions } = await constructModelRequest(model, task, apiKey, stream, body, requestOptions);
    return makeRequest(url, fetchOptions, fetchFn);
}
async function makeRequest(url, fetchOptions, fetchFn = fetch) {
    let response;
    try {
        response = await fetchFn(url, fetchOptions);
    }
    catch (e) {
        handleResponseError(e, url);
    }
    if (!response.ok) {
        await handleResponseNotOk(response, url);
    }
    return response;
}
function handleResponseError(e, url) {
    let err = e;
    if (err.name === "AbortError") {
        err = new GoogleGenerativeAIAbortError(`Request aborted when fetching ${url.toString()}: ${e.message}`);
        err.stack = e.stack;
    }
    else if (!(e instanceof GoogleGenerativeAIFetchError ||
        e instanceof GoogleGenerativeAIRequestInputError)) {
        err = new GoogleGenerativeAIError(`Error fetching from ${url.toString()}: ${e.message}`);
        err.stack = e.stack;
    }
    throw err;
}
async function handleResponseNotOk(response, url) {
    let message = "";
    let errorDetails;
    try {
        const json = await response.json();
        message = json.error.message;
        if (json.error.details) {
            message += ` ${JSON.stringify(json.error.details)}`;
            errorDetails = json.error.details;
        }
    }
    catch (e) {
        // ignored
    }
    throw new GoogleGenerativeAIFetchError(`Error fetching from ${url.toString()}: [${response.status} ${response.statusText}] ${message}`, response.status, response.statusText, errorDetails);
}
/**
 * Generates the request options to be passed to the fetch API.
 * @param requestOptions - The user-defined request options.
 * @returns The generated request options.
 */
function buildFetchOptions(requestOptions) {
    const fetchOptions = {};
    if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) !== undefined || (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
        const controller = new AbortController();
        if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
            setTimeout(() => controller.abort(), requestOptions.timeout);
        }
        if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) {
            requestOptions.signal.addEventListener("abort", () => {
                controller.abort();
            });
        }
        fetchOptions.signal = controller.signal;
    }
    return fetchOptions;
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Adds convenience helper methods to a response object, including stream
 * chunks (as long as each chunk is a complete GenerateContentResponse JSON).
 */
function addHelpers(response) {
    response.text = () => {
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` +
                    `candidates. Returning text from the first candidate only. ` +
                    `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            return getText(response);
        }
        else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Text not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return "";
    };
    /**
     * TODO: remove at next major version
     */
    response.functionCall = () => {
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` +
                    `candidates. Returning function calls from the first candidate only. ` +
                    `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            console.warn(`response.functionCall() is deprecated. ` +
                `Use response.functionCalls() instead.`);
            return getFunctionCalls(response)[0];
        }
        else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return undefined;
    };
    response.functionCalls = () => {
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` +
                    `candidates. Returning function calls from the first candidate only. ` +
                    `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            return getFunctionCalls(response);
        }
        else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return undefined;
    };
    return response;
}
/**
 * Returns all text found in all parts of first candidate.
 */
function getText(response) {
    var _a, _b, _c, _d;
    const textStrings = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts) {
            if (part.text) {
                textStrings.push(part.text);
            }
            if (part.executableCode) {
                textStrings.push("\n```" +
                    part.executableCode.language +
                    "\n" +
                    part.executableCode.code +
                    "\n```\n");
            }
            if (part.codeExecutionResult) {
                textStrings.push("\n```\n" + part.codeExecutionResult.output + "\n```\n");
            }
        }
    }
    if (textStrings.length > 0) {
        return textStrings.join("");
    }
    else {
        return "";
    }
}
/**
 * Returns functionCall of first candidate.
 */
function getFunctionCalls(response) {
    var _a, _b, _c, _d;
    const functionCalls = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts) {
            if (part.functionCall) {
                functionCalls.push(part.functionCall);
            }
        }
    }
    if (functionCalls.length > 0) {
        return functionCalls;
    }
    else {
        return undefined;
    }
}
const badFinishReasons = [
    FinishReason.RECITATION,
    FinishReason.SAFETY,
    FinishReason.LANGUAGE,
];
function hadBadFinishReason(candidate) {
    return (!!candidate.finishReason &&
        badFinishReasons.includes(candidate.finishReason));
}
function formatBlockErrorMessage(response) {
    var _a, _b, _c;
    let message = "";
    if ((!response.candidates || response.candidates.length === 0) &&
        response.promptFeedback) {
        message += "Response was blocked";
        if ((_a = response.promptFeedback) === null || _a === void 0 ? void 0 : _a.blockReason) {
            message += ` due to ${response.promptFeedback.blockReason}`;
        }
        if ((_b = response.promptFeedback) === null || _b === void 0 ? void 0 : _b.blockReasonMessage) {
            message += `: ${response.promptFeedback.blockReasonMessage}`;
        }
    }
    else if ((_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0]) {
        const firstCandidate = response.candidates[0];
        if (hadBadFinishReason(firstCandidate)) {
            message += `Candidate was blocked due to ${firstCandidate.finishReason}`;
            if (firstCandidate.finishMessage) {
                message += `: ${firstCandidate.finishMessage}`;
            }
        }
    }
    return message;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const responseLineRE = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
/**
 * Process a response.body stream from the backend and return an
 * iterator that provides one complete GenerateContentResponse at a time
 * and a promise that resolves with a single aggregated
 * GenerateContentResponse.
 *
 * @param response - Response from a fetch call
 */
function processStream(response) {
    const inputStream = response.body.pipeThrough(new TextDecoderStream("utf8", { fatal: true }));
    const responseStream = getResponseStream(inputStream);
    const [stream1, stream2] = responseStream.tee();
    return {
        stream: generateResponseSequence(stream1),
        response: getResponsePromise(stream2),
    };
}
async function getResponsePromise(stream) {
    const allResponses = [];
    const reader = stream.getReader();
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            return addHelpers(aggregateResponses(allResponses));
        }
        allResponses.push(value);
    }
}
function generateResponseSequence(stream) {
    return __asyncGenerator(this, arguments, function* generateResponseSequence_1() {
        const reader = stream.getReader();
        while (true) {
            const { value, done } = yield __await(reader.read());
            if (done) {
                break;
            }
            yield yield __await(addHelpers(value));
        }
    });
}
/**
 * Reads a raw stream from the fetch response and join incomplete
 * chunks, returning a new stream that provides a single complete
 * GenerateContentResponse in each iteration.
 */
function getResponseStream(inputStream) {
    const reader = inputStream.getReader();
    const stream = new ReadableStream({
        start(controller) {
            let currentText = "";
            return pump();
            function pump() {
                return reader
                    .read()
                    .then(({ value, done }) => {
                    if (done) {
                        if (currentText.trim()) {
                            controller.error(new GoogleGenerativeAIError("Failed to parse stream"));
                            return;
                        }
                        controller.close();
                        return;
                    }
                    currentText += value;
                    let match = currentText.match(responseLineRE);
                    let parsedResponse;
                    while (match) {
                        try {
                            parsedResponse = JSON.parse(match[1]);
                        }
                        catch (e) {
                            controller.error(new GoogleGenerativeAIError(`Error parsing JSON response: "${match[1]}"`));
                            return;
                        }
                        controller.enqueue(parsedResponse);
                        currentText = currentText.substring(match[0].length);
                        match = currentText.match(responseLineRE);
                    }
                    return pump();
                })
                    .catch((e) => {
                    let err = e;
                    err.stack = e.stack;
                    if (err.name === "AbortError") {
                        err = new GoogleGenerativeAIAbortError("Request aborted when reading from the stream");
                    }
                    else {
                        err = new GoogleGenerativeAIError("Error reading from the stream");
                    }
                    throw err;
                });
            }
        },
    });
    return stream;
}
/**
 * Aggregates an array of `GenerateContentResponse`s into a single
 * GenerateContentResponse.
 */
function aggregateResponses(responses) {
    const lastResponse = responses[responses.length - 1];
    const aggregatedResponse = {
        promptFeedback: lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.promptFeedback,
    };
    for (const response of responses) {
        if (response.candidates) {
            let candidateIndex = 0;
            for (const candidate of response.candidates) {
                if (!aggregatedResponse.candidates) {
                    aggregatedResponse.candidates = [];
                }
                if (!aggregatedResponse.candidates[candidateIndex]) {
                    aggregatedResponse.candidates[candidateIndex] = {
                        index: candidateIndex,
                    };
                }
                // Keep overwriting, the last one will be final
                aggregatedResponse.candidates[candidateIndex].citationMetadata =
                    candidate.citationMetadata;
                aggregatedResponse.candidates[candidateIndex].groundingMetadata =
                    candidate.groundingMetadata;
                aggregatedResponse.candidates[candidateIndex].finishReason =
                    candidate.finishReason;
                aggregatedResponse.candidates[candidateIndex].finishMessage =
                    candidate.finishMessage;
                aggregatedResponse.candidates[candidateIndex].safetyRatings =
                    candidate.safetyRatings;
                /**
                 * Candidates should always have content and parts, but this handles
                 * possible malformed responses.
                 */
                if (candidate.content && candidate.content.parts) {
                    if (!aggregatedResponse.candidates[candidateIndex].content) {
                        aggregatedResponse.candidates[candidateIndex].content = {
                            role: candidate.content.role || "user",
                            parts: [],
                        };
                    }
                    const newPart = {};
                    for (const part of candidate.content.parts) {
                        if (part.text) {
                            newPart.text = part.text;
                        }
                        if (part.functionCall) {
                            newPart.functionCall = part.functionCall;
                        }
                        if (part.executableCode) {
                            newPart.executableCode = part.executableCode;
                        }
                        if (part.codeExecutionResult) {
                            newPart.codeExecutionResult = part.codeExecutionResult;
                        }
                        if (Object.keys(newPart).length === 0) {
                            newPart.text = "";
                        }
                        aggregatedResponse.candidates[candidateIndex].content.parts.push(newPart);
                    }
                }
            }
            candidateIndex++;
        }
        if (response.usageMetadata) {
            aggregatedResponse.usageMetadata = response.usageMetadata;
        }
    }
    return aggregatedResponse;
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function generateContentStream(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.STREAM_GENERATE_CONTENT, apiKey, 
    /* stream */ true, JSON.stringify(params), requestOptions);
    return processStream(response);
}
async function generateContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.GENERATE_CONTENT, apiKey, 
    /* stream */ false, JSON.stringify(params), requestOptions);
    const responseJson = await response.json();
    const enhancedResponse = addHelpers(responseJson);
    return {
        response: enhancedResponse,
    };
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function formatSystemInstruction(input) {
    // null or undefined
    if (input == null) {
        return undefined;
    }
    else if (typeof input === "string") {
        return { role: "system", parts: [{ text: input }] };
    }
    else if (input.text) {
        return { role: "system", parts: [input] };
    }
    else if (input.parts) {
        if (!input.role) {
            return { role: "system", parts: input.parts };
        }
        else {
            return input;
        }
    }
}
function formatNewContent(request) {
    let newParts = [];
    if (typeof request === "string") {
        newParts = [{ text: request }];
    }
    else {
        for (const partOrString of request) {
            if (typeof partOrString === "string") {
                newParts.push({ text: partOrString });
            }
            else {
                newParts.push(partOrString);
            }
        }
    }
    return assignRoleToPartsAndValidateSendMessageRequest(newParts);
}
/**
 * When multiple Part types (i.e. FunctionResponsePart and TextPart) are
 * passed in a single Part array, we may need to assign different roles to each
 * part. Currently only FunctionResponsePart requires a role other than 'user'.
 * @private
 * @param parts Array of parts to pass to the model
 * @returns Array of content items
 */
function assignRoleToPartsAndValidateSendMessageRequest(parts) {
    const userContent = { role: "user", parts: [] };
    const functionContent = { role: "function", parts: [] };
    let hasUserContent = false;
    let hasFunctionContent = false;
    for (const part of parts) {
        if ("functionResponse" in part) {
            functionContent.parts.push(part);
            hasFunctionContent = true;
        }
        else {
            userContent.parts.push(part);
            hasUserContent = true;
        }
    }
    if (hasUserContent && hasFunctionContent) {
        throw new GoogleGenerativeAIError("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");
    }
    if (!hasUserContent && !hasFunctionContent) {
        throw new GoogleGenerativeAIError("No content is provided for sending chat message.");
    }
    if (hasUserContent) {
        return userContent;
    }
    return functionContent;
}
function formatCountTokensInput(params, modelParams) {
    var _a;
    let formattedGenerateContentRequest = {
        model: modelParams === null || modelParams === void 0 ? void 0 : modelParams.model,
        generationConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.generationConfig,
        safetySettings: modelParams === null || modelParams === void 0 ? void 0 : modelParams.safetySettings,
        tools: modelParams === null || modelParams === void 0 ? void 0 : modelParams.tools,
        toolConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.toolConfig,
        systemInstruction: modelParams === null || modelParams === void 0 ? void 0 : modelParams.systemInstruction,
        cachedContent: (_a = modelParams === null || modelParams === void 0 ? void 0 : modelParams.cachedContent) === null || _a === void 0 ? void 0 : _a.name,
        contents: [],
    };
    const containsGenerateContentRequest = params.generateContentRequest != null;
    if (params.contents) {
        if (containsGenerateContentRequest) {
            throw new GoogleGenerativeAIRequestInputError("CountTokensRequest must have one of contents or generateContentRequest, not both.");
        }
        formattedGenerateContentRequest.contents = params.contents;
    }
    else if (containsGenerateContentRequest) {
        formattedGenerateContentRequest = Object.assign(Object.assign({}, formattedGenerateContentRequest), params.generateContentRequest);
    }
    else {
        // Array or string
        const content = formatNewContent(params);
        formattedGenerateContentRequest.contents = [content];
    }
    return { generateContentRequest: formattedGenerateContentRequest };
}
function formatGenerateContentInput(params) {
    let formattedRequest;
    if (params.contents) {
        formattedRequest = params;
    }
    else {
        // Array or string
        const content = formatNewContent(params);
        formattedRequest = { contents: [content] };
    }
    if (params.systemInstruction) {
        formattedRequest.systemInstruction = formatSystemInstruction(params.systemInstruction);
    }
    return formattedRequest;
}
function formatEmbedContentInput(params) {
    if (typeof params === "string" || Array.isArray(params)) {
        const content = formatNewContent(params);
        return { content };
    }
    return params;
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// https://ai.google.dev/api/rest/v1beta/Content#part
const VALID_PART_FIELDS = [
    "text",
    "inlineData",
    "functionCall",
    "functionResponse",
    "executableCode",
    "codeExecutionResult",
];
const VALID_PARTS_PER_ROLE = {
    user: ["text", "inlineData"],
    function: ["functionResponse"],
    model: ["text", "functionCall", "executableCode", "codeExecutionResult"],
    // System instructions shouldn't be in history anyway.
    system: ["text"],
};
function validateChatHistory(history) {
    let prevContent = false;
    for (const currContent of history) {
        const { role, parts } = currContent;
        if (!prevContent && role !== "user") {
            throw new GoogleGenerativeAIError(`First content should be with role 'user', got ${role}`);
        }
        if (!POSSIBLE_ROLES.includes(role)) {
            throw new GoogleGenerativeAIError(`Each item should include role field. Got ${role} but valid roles are: ${JSON.stringify(POSSIBLE_ROLES)}`);
        }
        if (!Array.isArray(parts)) {
            throw new GoogleGenerativeAIError("Content should have 'parts' property with an array of Parts");
        }
        if (parts.length === 0) {
            throw new GoogleGenerativeAIError("Each Content should have at least one part");
        }
        const countFields = {
            text: 0,
            inlineData: 0,
            functionCall: 0,
            functionResponse: 0,
            fileData: 0,
            executableCode: 0,
            codeExecutionResult: 0,
        };
        for (const part of parts) {
            for (const key of VALID_PART_FIELDS) {
                if (key in part) {
                    countFields[key] += 1;
                }
            }
        }
        const validParts = VALID_PARTS_PER_ROLE[role];
        for (const key of VALID_PART_FIELDS) {
            if (!validParts.includes(key) && countFields[key] > 0) {
                throw new GoogleGenerativeAIError(`Content with role '${role}' can't contain '${key}' part`);
            }
        }
        prevContent = true;
    }
}
/**
 * Returns true if the response is valid (could be appended to the history), flase otherwise.
 */
function isValidResponse(response) {
    var _a;
    if (response.candidates === undefined || response.candidates.length === 0) {
        return false;
    }
    const content = (_a = response.candidates[0]) === null || _a === void 0 ? void 0 : _a.content;
    if (content === undefined) {
        return false;
    }
    if (content.parts === undefined || content.parts.length === 0) {
        return false;
    }
    for (const part of content.parts) {
        if (part === undefined || Object.keys(part).length === 0) {
            return false;
        }
        if (part.text !== undefined && part.text === "") {
            return false;
        }
    }
    return true;
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do not log a message for this error.
 */
const SILENT_ERROR = "SILENT_ERROR";
/**
 * ChatSession class that enables sending chat messages and stores
 * history of sent and received messages so far.
 *
 * @public
 */
class ChatSession {
    constructor(apiKey, model, params, _requestOptions = {}) {
        this.model = model;
        this.params = params;
        this._requestOptions = _requestOptions;
        this._history = [];
        this._sendPromise = Promise.resolve();
        this._apiKey = apiKey;
        if (params === null || params === void 0 ? void 0 : params.history) {
            validateChatHistory(params.history);
            this._history = params.history;
        }
    }
    /**
     * Gets the chat history so far. Blocked prompts are not added to history.
     * Blocked candidates are not added to history, nor are the prompts that
     * generated them.
     */
    async getHistory() {
        await this._sendPromise;
        return this._history;
    }
    /**
     * Sends a chat message and receives a non-streaming
     * {@link GenerateContentResult}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async sendMessage(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [...this._history, newContent],
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        let finalResult;
        // Add onto the chain.
        this._sendPromise = this._sendPromise
            .then(() => generateContent(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions))
            .then((result) => {
            var _a;
            if (isValidResponse(result.response)) {
                this._history.push(newContent);
                const responseContent = Object.assign({ parts: [], 
                    // Response seems to come back without a role set.
                    role: "model" }, (_a = result.response.candidates) === null || _a === void 0 ? void 0 : _a[0].content);
                this._history.push(responseContent);
            }
            else {
                const blockErrorMessage = formatBlockErrorMessage(result.response);
                if (blockErrorMessage) {
                    console.warn(`sendMessage() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
            finalResult = result;
        })
            .catch((e) => {
            // Resets _sendPromise to avoid subsequent calls failing and throw error.
            this._sendPromise = Promise.resolve();
            throw e;
        });
        await this._sendPromise;
        return finalResult;
    }
    /**
     * Sends a chat message and receives the response as a
     * {@link GenerateContentStreamResult} containing an iterable stream
     * and a response promise.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async sendMessageStream(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [...this._history, newContent],
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        const streamPromise = generateContentStream(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions);
        // Add onto the chain.
        this._sendPromise = this._sendPromise
            .then(() => streamPromise)
            // This must be handled to avoid unhandled rejection, but jump
            // to the final catch block with a label to not log this error.
            .catch((_ignored) => {
            throw new Error(SILENT_ERROR);
        })
            .then((streamResult) => streamResult.response)
            .then((response) => {
            if (isValidResponse(response)) {
                this._history.push(newContent);
                const responseContent = Object.assign({}, response.candidates[0].content);
                // Response seems to come back without a role set.
                if (!responseContent.role) {
                    responseContent.role = "model";
                }
                this._history.push(responseContent);
            }
            else {
                const blockErrorMessage = formatBlockErrorMessage(response);
                if (blockErrorMessage) {
                    console.warn(`sendMessageStream() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
        })
            .catch((e) => {
            // Errors in streamPromise are already catchable by the user as
            // streamPromise is returned.
            // Avoid duplicating the error message in logs.
            if (e.message !== SILENT_ERROR) {
                // Users do not have access to _sendPromise to catch errors
                // downstream from streamPromise, so they should not throw.
                console.error(e);
            }
        });
        return streamPromise;
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function countTokens(apiKey, model, params, singleRequestOptions) {
    const response = await makeModelRequest(model, Task.COUNT_TOKENS, apiKey, false, JSON.stringify(params), singleRequestOptions);
    return response.json();
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function embedContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.EMBED_CONTENT, apiKey, false, JSON.stringify(params), requestOptions);
    return response.json();
}
async function batchEmbedContents(apiKey, model, params, requestOptions) {
    const requestsWithModel = params.requests.map((request) => {
        return Object.assign(Object.assign({}, request), { model });
    });
    const response = await makeModelRequest(model, Task.BATCH_EMBED_CONTENTS, apiKey, false, JSON.stringify({ requests: requestsWithModel }), requestOptions);
    return response.json();
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Class for generative model APIs.
 * @public
 */
class GenerativeModel {
    constructor(apiKey, modelParams, _requestOptions = {}) {
        this.apiKey = apiKey;
        this._requestOptions = _requestOptions;
        if (modelParams.model.includes("/")) {
            // Models may be named "models/model-name" or "tunedModels/model-name"
            this.model = modelParams.model;
        }
        else {
            // If path is not included, assume it's a non-tuned model.
            this.model = `models/${modelParams.model}`;
        }
        this.generationConfig = modelParams.generationConfig || {};
        this.safetySettings = modelParams.safetySettings || [];
        this.tools = modelParams.tools;
        this.toolConfig = modelParams.toolConfig;
        this.systemInstruction = formatSystemInstruction(modelParams.systemInstruction);
        this.cachedContent = modelParams.cachedContent;
    }
    /**
     * Makes a single non-streaming call to the model
     * and returns an object containing a single {@link GenerateContentResponse}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async generateContent(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContent(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings, tools: this.tools, toolConfig: this.toolConfig, systemInstruction: this.systemInstruction, cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Makes a single streaming call to the model and returns an object
     * containing an iterable stream that iterates over all chunks in the
     * streaming response as well as a promise that returns the final
     * aggregated response.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async generateContentStream(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContentStream(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings, tools: this.tools, toolConfig: this.toolConfig, systemInstruction: this.systemInstruction, cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Gets a new {@link ChatSession} instance which can be used for
     * multi-turn chats.
     */
    startChat(startChatParams) {
        var _a;
        return new ChatSession(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings, tools: this.tools, toolConfig: this.toolConfig, systemInstruction: this.systemInstruction, cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name }, startChatParams), this._requestOptions);
    }
    /**
     * Counts the tokens in the provided request.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async countTokens(request, requestOptions = {}) {
        const formattedParams = formatCountTokensInput(request, {
            model: this.model,
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: this.cachedContent,
        });
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return countTokens(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds the provided content.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async embedContent(request, requestOptions = {}) {
        const formattedParams = formatEmbedContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return embedContent(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds an array of {@link EmbedContentRequest}s.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async batchEmbedContents(batchEmbedContentRequest, requestOptions = {}) {
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return batchEmbedContents(this.apiKey, this.model, batchEmbedContentRequest, generativeModelRequestOptions);
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Top-level class for this SDK
 * @public
 */
class GoogleGenerativeAI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Gets a {@link GenerativeModel} instance for the provided model name.
     */
    getGenerativeModel(modelParams, requestOptions) {
        if (!modelParams.model) {
            throw new GoogleGenerativeAIError(`Must provide a model name. ` +
                `Example: genai.getGenerativeModel({ model: 'my-model-name' })`);
        }
        return new GenerativeModel(this.apiKey, modelParams, requestOptions);
    }
    /**
     * Creates a {@link GenerativeModel} instance from provided content cache.
     */
    getGenerativeModelFromCachedContent(cachedContent, modelParams, requestOptions) {
        if (!cachedContent.name) {
            throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `name` field.");
        }
        if (!cachedContent.model) {
            throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `model` field.");
        }
        /**
         * Not checking tools and toolConfig for now as it would require a deep
         * equality comparison and isn't likely to be a common case.
         */
        const disallowedDuplicates = ["model", "systemInstruction"];
        for (const key of disallowedDuplicates) {
            if ((modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) &&
                cachedContent[key] &&
                (modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) !== cachedContent[key]) {
                if (key === "model") {
                    const modelParamsComp = modelParams.model.startsWith("models/")
                        ? modelParams.model.replace("models/", "")
                        : modelParams.model;
                    const cachedContentComp = cachedContent.model.startsWith("models/")
                        ? cachedContent.model.replace("models/", "")
                        : cachedContent.model;
                    if (modelParamsComp === cachedContentComp) {
                        continue;
                    }
                }
                throw new GoogleGenerativeAIRequestInputError(`Different value for "${key}" specified in modelParams` +
                    ` (${modelParams[key]}) and cachedContent (${cachedContent[key]})`);
            }
        }
        const modelParamsFromCache = Object.assign(Object.assign({}, modelParams), { model: cachedContent.model, tools: cachedContent.tools, toolConfig: cachedContent.toolConfig, systemInstruction: cachedContent.systemInstruction, cachedContent });
        return new GenerativeModel(this.apiKey, modelParamsFromCache, requestOptions);
    }
}


//# sourceMappingURL=index.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./background.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/generative-ai */ "./node_modules/@google/generative-ai/dist/index.mjs");
// @google/generative-ai ライブラリをインポート


// --- デバッグ用の詳細ログ設定 ---
// 詳細なログを見る必要がなくなったら、以下のフラグを false にしてください。
const DETAILED_LOGGING_ENABLED = true;

function detailedLog(...args) {
  if (DETAILED_LOGGING_ENABLED) {
    console.log("バックグラウンド:", ...args);
  }
}

detailedLog("Service Worker 起動 (または再起動)");

// --- メインのメッセージリスナー (コンテンツスクリプトからのリクエストを処理) ---
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  detailedLog("'onMessage' リスナー受信:", request);

  if (request.action === "translate") {
    detailedLog("'translate' アクション処理開始");
    handleTranslateRequest(request, sender, sendResponse);
    return true; // 非同期処理のため true を返す
  }
  // 他のメッセージタイプがあればここに追加
  return false; // このリスナーがこれ以上メッセージを処理しないことを示す
});

// --- ショートカットキーコマンドのリスナー ---
chrome.commands.onCommand.addListener(async (command, tab) => {
  detailedLog(`コマンド「${command}」受信 (タブID: ${tab ? tab.id : "N/A"})`);

  // manifest.json で定義したコマンド名と一致させる
  if (command === "translate_selection") {
    // ← manifest.json で定義したコマンド名
    if (tab && tab.id) {
      try {
        const storageItems = await chrome.storage.local.get([
          "defaultTargetLanguage",
        ]);
        const targetLang = storageItems.defaultTargetLanguage || "ja"; // デフォルトは日本語

        detailedLog(
          `コンテンツスクリプト (${tab.id}) に getSelectionAndTranslate を送信 (コマンド経由)。 targetLang: ${targetLang}`
        );
        const responseFromContentScript = await chrome.tabs.sendMessage(
          tab.id,
          {
            action: "getSelectionAndTranslate", // content.js がこのアクションをリッスンする
            targetLang: targetLang,
          }
        );
        detailedLog(
          "コンテンツスクリプトからの応答 (コマンド経由):",
          responseFromContentScript
        );
        // コンテンツスクリプトからの応答に基づいて何か処理をする場合はここ
      } catch (error) {
        console.error(
          `コンテンツスクリプト (${tab.id}) へのメッセージ送信失敗 (コマンド経由):`,
          error
        );
        if (
          error.message &&
          error.message.includes("Receiving end does not exist")
        ) {
          console.warn(
            "現在のタブではコンテンツスクリプトが実行されていないか、応答がありません。ページをリロードしてみてください。"
          );
          // 必要であれば chrome.notifications API などでユーザーに通知
          // chrome.notifications.create({
          //   type: 'basic',
          //   iconUrl: 'icons/icon48.png',
          //   title: '翻訳エラー',
          //   message: '現在のページでは翻訳を実行できませんでした。ページをリロードしてお試しください。'
          // });
        }
      }
    } else {
      console.error("アクティブなタブ情報が取得できませんでした（コマンド）。");
    }
  }
});

// --- 翻訳リクエスト処理関数 ---
async function handleTranslateRequest(request, sender, sendResponse) {
  detailedLog("handleTranslateRequest 開始。リクエスト:", request);
  try {
    detailedLog("ローカルストレージから設定を読み込み開始...");
    const items = await chrome.storage.local.get([
      "geminiApiKey",
      "defaultTargetLanguage",
    ]);
    detailedLog(
      "読み込んだ設定オブジェクト (items):",
      JSON.stringify(items, null, 2)
    );

    const apiKey = items.geminiApiKey;
    detailedLog("--- APIキーチェック開始 ---");
    detailedLog("typeof apiKey:", typeof apiKey);
    detailedLog("apiKey の値:", apiKey); // ★ここが最も重要！
    detailedLog("apiKey === undefined:", apiKey === undefined);
    detailedLog("apiKey === null:", apiKey === null);
    detailedLog("apiKey === '':", apiKey === "");
    detailedLog("!apiKey の評価結果:", !apiKey);
    detailedLog("--- APIキーチェック終了 ---");

    const textToTranslate = request.text;
    // リクエストに targetLang があればそれを使用、なければデフォルト言語を使用
    const targetLanguage =
      request.targetLang || items.defaultTargetLanguage || "ja";
    detailedLog(
      "翻訳対象テキスト:",
      textToTranslate,
      "翻訳先言語:",
      targetLanguage
    );

    if (!apiKey) {
      const errorMsg =
        "APIキーが設定されていません。オプションページで設定してください。";
      console.error("バックグラウンド: " + errorMsg);
      sendResponse({ error: errorMsg });
      return;
    }

    detailedLog("APIキー確認OK、Gemini API呼び出し準備");
    const genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenerativeAI(apiKey);
    const modelName = "gemini-1.5-flash-latest"; // または "gemini-pro" など、利用したいモデル
    const model = genAI.getGenerativeModel({
      model: modelName,
      safetySettings: [
        // 必要に応じて調整
        {
          category: _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
      generationConfig: {
        // 必要に応じて設定
        // temperature: 0.7,
        // maxOutputTokens: 2048,
      },
    });

    const prompt = `以下の「テキスト」を自然な「${targetLanguage}」に翻訳してください。翻訳されたテキストのみを返してください。\n\nテキスト：\n${textToTranslate}`;
    detailedLog("Geminiへのプロンプト:", prompt);

    const result = await model.generateContent(prompt);
    const generationResponse = result.response;

    if (!generationResponse) {
      let blockReason = "不明な理由 (レスポンスなし)";
      let safetyRatingsInfo = "N/A";
      if (result.response && result.response.promptFeedback) {
        if (result.response.promptFeedback.blockReason) {
          blockReason = result.response.promptFeedback.blockReason;
        }
        if (result.response.promptFeedback.safetyRatings) {
          safetyRatingsInfo = JSON.stringify(
            result.response.promptFeedback.safetyRatings
          );
        }
      }
      const errorMsg = `翻訳リクエストがブロックされたか、レスポンスがありませんでした。理由: ${blockReason}, SafetyRatings: ${safetyRatingsInfo}`;
      console.error("バックグラウンド: " + errorMsg, result);
      sendResponse({ error: errorMsg });
      return;
    }

    const translatedText = generationResponse.text();
    detailedLog("翻訳成功 (SDK):", translatedText);
    sendResponse({ translatedText: translatedText.trim() });
  } catch (error) {
    console.error("バックグラウンド: 翻訳処理中の包括的なエラー:", error);
    let errorMessage = "翻訳処理中に予期せぬエラーが発生しました。";
    if (error.message) {
      errorMessage += ` ${error.message}`;
    }
    // GoogleGenerativeAIError の場合、より詳細な情報が含まれることがある
    if (
      error.name === "GoogleGenerativeAIResponseError" ||
      (error.toString &&
        error.toString().includes("[GoogleGenerativeAI Error]"))
    ) {
      console.error(
        "GoogleGenerativeAI Error details:",
        error.message,
        error.stack,
        error
      );
      errorMessage = `Gemini APIエラー: ${error.message}`;
    }
    sendResponse({ error: errorMessage });
  }
}

// 拡張機能インストール時やアップデート時に、オプションページで初期設定を促す (任意)
chrome.runtime.onInstalled.addListener(async (details) => {
  detailedLog("onInstalled イベント:", details);
  if (details.reason === "install") {
    // 初回インストール時にオプションページを開く
    // chrome.runtime.openOptionsPage();

    // または、デフォルト設定を書き込む
    const items = await chrome.storage.local.get([
      "defaultTargetLanguage",
      "targetLanguagePopup",
    ]);
    if (!items.defaultTargetLanguage) {
      detailedLog("デフォルトの翻訳先言語を 'ja' に設定します。");
      chrome.storage.local.set({ defaultTargetLanguage: "ja" });
    }
    if (!items.targetLanguagePopup) {
      detailedLog("ポップアップの翻訳先言語を 'ja' に設定します。");
      chrome.storage.local.set({ targetLanguagePopup: "ja" });
    }
  }
  // アップデート時の処理などもここに追加可能
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZF9idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0RBQXdEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMEJBQTBCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0RBQWdEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBMEM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGtEQUFrRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0RBQW9EOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QWE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwR0FBMEcsU0FBUztBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCLGFBQWE7QUFDeEQ7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QUNBLG9DQUFvQyxlQUFlLDRDQUE0QyxnQkFBZ0I7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELFlBQVksbUJBQW1CLGtCQUFrQjtBQUMvRztBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1Q0FBdUM7QUFDMUQsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGNBQWM7QUFDckQ7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNkJBQTZCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywyQkFBMkI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbWluaXRyYW5zbGF0b3IvLi9ub2RlX21vZHVsZXMvQGdvb2dsZS9nZW5lcmF0aXZlLWFpL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2dlbWluaXRyYW5zbGF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2VtaW5pdHJhbnNsYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2VtaW5pdHJhbnNsYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dlbWluaXRyYW5zbGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nZW1pbml0cmFuc2xhdG9yLy4vYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbnRhaW5zIHRoZSBsaXN0IG9mIE9wZW5BUEkgZGF0YSB0eXBlc1xuICogYXMgZGVmaW5lZCBieSBodHRwczovL3N3YWdnZXIuaW8vZG9jcy9zcGVjaWZpY2F0aW9uL2RhdGEtbW9kZWxzL2RhdGEtdHlwZXMvXG4gKiBAcHVibGljXG4gKi9cbnZhciBTY2hlbWFUeXBlO1xuKGZ1bmN0aW9uIChTY2hlbWFUeXBlKSB7XG4gICAgLyoqIFN0cmluZyB0eXBlLiAqL1xuICAgIFNjaGVtYVR5cGVbXCJTVFJJTkdcIl0gPSBcInN0cmluZ1wiO1xuICAgIC8qKiBOdW1iZXIgdHlwZS4gKi9cbiAgICBTY2hlbWFUeXBlW1wiTlVNQkVSXCJdID0gXCJudW1iZXJcIjtcbiAgICAvKiogSW50ZWdlciB0eXBlLiAqL1xuICAgIFNjaGVtYVR5cGVbXCJJTlRFR0VSXCJdID0gXCJpbnRlZ2VyXCI7XG4gICAgLyoqIEJvb2xlYW4gdHlwZS4gKi9cbiAgICBTY2hlbWFUeXBlW1wiQk9PTEVBTlwiXSA9IFwiYm9vbGVhblwiO1xuICAgIC8qKiBBcnJheSB0eXBlLiAqL1xuICAgIFNjaGVtYVR5cGVbXCJBUlJBWVwiXSA9IFwiYXJyYXlcIjtcbiAgICAvKiogT2JqZWN0IHR5cGUuICovXG4gICAgU2NoZW1hVHlwZVtcIk9CSkVDVFwiXSA9IFwib2JqZWN0XCI7XG59KShTY2hlbWFUeXBlIHx8IChTY2hlbWFUeXBlID0ge30pKTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQHB1YmxpY1xuICovXG52YXIgRXhlY3V0YWJsZUNvZGVMYW5ndWFnZTtcbihmdW5jdGlvbiAoRXhlY3V0YWJsZUNvZGVMYW5ndWFnZSkge1xuICAgIEV4ZWN1dGFibGVDb2RlTGFuZ3VhZ2VbXCJMQU5HVUFHRV9VTlNQRUNJRklFRFwiXSA9IFwibGFuZ3VhZ2VfdW5zcGVjaWZpZWRcIjtcbiAgICBFeGVjdXRhYmxlQ29kZUxhbmd1YWdlW1wiUFlUSE9OXCJdID0gXCJweXRob25cIjtcbn0pKEV4ZWN1dGFibGVDb2RlTGFuZ3VhZ2UgfHwgKEV4ZWN1dGFibGVDb2RlTGFuZ3VhZ2UgPSB7fSkpO1xuLyoqXG4gKiBQb3NzaWJsZSBvdXRjb21lcyBvZiBjb2RlIGV4ZWN1dGlvbi5cbiAqIEBwdWJsaWNcbiAqL1xudmFyIE91dGNvbWU7XG4oZnVuY3Rpb24gKE91dGNvbWUpIHtcbiAgICAvKipcbiAgICAgKiBVbnNwZWNpZmllZCBzdGF0dXMuIFRoaXMgdmFsdWUgc2hvdWxkIG5vdCBiZSB1c2VkLlxuICAgICAqL1xuICAgIE91dGNvbWVbXCJPVVRDT01FX1VOU1BFQ0lGSUVEXCJdID0gXCJvdXRjb21lX3Vuc3BlY2lmaWVkXCI7XG4gICAgLyoqXG4gICAgICogQ29kZSBleGVjdXRpb24gY29tcGxldGVkIHN1Y2Nlc3NmdWxseS5cbiAgICAgKi9cbiAgICBPdXRjb21lW1wiT1VUQ09NRV9PS1wiXSA9IFwib3V0Y29tZV9va1wiO1xuICAgIC8qKlxuICAgICAqIENvZGUgZXhlY3V0aW9uIGZpbmlzaGVkIGJ1dCB3aXRoIGEgZmFpbHVyZS4gYHN0ZGVycmAgc2hvdWxkIGNvbnRhaW4gdGhlXG4gICAgICogcmVhc29uLlxuICAgICAqL1xuICAgIE91dGNvbWVbXCJPVVRDT01FX0ZBSUxFRFwiXSA9IFwib3V0Y29tZV9mYWlsZWRcIjtcbiAgICAvKipcbiAgICAgKiBDb2RlIGV4ZWN1dGlvbiByYW4gZm9yIHRvbyBsb25nLCBhbmQgd2FzIGNhbmNlbGxlZC4gVGhlcmUgbWF5IG9yIG1heSBub3RcbiAgICAgKiBiZSBhIHBhcnRpYWwgb3V0cHV0IHByZXNlbnQuXG4gICAgICovXG4gICAgT3V0Y29tZVtcIk9VVENPTUVfREVBRExJTkVfRVhDRUVERURcIl0gPSBcIm91dGNvbWVfZGVhZGxpbmVfZXhjZWVkZWRcIjtcbn0pKE91dGNvbWUgfHwgKE91dGNvbWUgPSB7fSkpO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyNCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBQb3NzaWJsZSByb2xlcy5cbiAqIEBwdWJsaWNcbiAqL1xuY29uc3QgUE9TU0lCTEVfUk9MRVMgPSBbXCJ1c2VyXCIsIFwibW9kZWxcIiwgXCJmdW5jdGlvblwiLCBcInN5c3RlbVwiXTtcbi8qKlxuICogSGFybSBjYXRlZ29yaWVzIHRoYXQgd291bGQgY2F1c2UgcHJvbXB0cyBvciBjYW5kaWRhdGVzIHRvIGJlIGJsb2NrZWQuXG4gKiBAcHVibGljXG4gKi9cbnZhciBIYXJtQ2F0ZWdvcnk7XG4oZnVuY3Rpb24gKEhhcm1DYXRlZ29yeSkge1xuICAgIEhhcm1DYXRlZ29yeVtcIkhBUk1fQ0FURUdPUllfVU5TUEVDSUZJRURcIl0gPSBcIkhBUk1fQ0FURUdPUllfVU5TUEVDSUZJRURcIjtcbiAgICBIYXJtQ2F0ZWdvcnlbXCJIQVJNX0NBVEVHT1JZX0hBVEVfU1BFRUNIXCJdID0gXCJIQVJNX0NBVEVHT1JZX0hBVEVfU1BFRUNIXCI7XG4gICAgSGFybUNhdGVnb3J5W1wiSEFSTV9DQVRFR09SWV9TRVhVQUxMWV9FWFBMSUNJVFwiXSA9IFwiSEFSTV9DQVRFR09SWV9TRVhVQUxMWV9FWFBMSUNJVFwiO1xuICAgIEhhcm1DYXRlZ29yeVtcIkhBUk1fQ0FURUdPUllfSEFSQVNTTUVOVFwiXSA9IFwiSEFSTV9DQVRFR09SWV9IQVJBU1NNRU5UXCI7XG4gICAgSGFybUNhdGVnb3J5W1wiSEFSTV9DQVRFR09SWV9EQU5HRVJPVVNfQ09OVEVOVFwiXSA9IFwiSEFSTV9DQVRFR09SWV9EQU5HRVJPVVNfQ09OVEVOVFwiO1xuICAgIEhhcm1DYXRlZ29yeVtcIkhBUk1fQ0FURUdPUllfQ0lWSUNfSU5URUdSSVRZXCJdID0gXCJIQVJNX0NBVEVHT1JZX0NJVklDX0lOVEVHUklUWVwiO1xufSkoSGFybUNhdGVnb3J5IHx8IChIYXJtQ2F0ZWdvcnkgPSB7fSkpO1xuLyoqXG4gKiBUaHJlc2hvbGQgYWJvdmUgd2hpY2ggYSBwcm9tcHQgb3IgY2FuZGlkYXRlIHdpbGwgYmUgYmxvY2tlZC5cbiAqIEBwdWJsaWNcbiAqL1xudmFyIEhhcm1CbG9ja1RocmVzaG9sZDtcbihmdW5jdGlvbiAoSGFybUJsb2NrVGhyZXNob2xkKSB7XG4gICAgLyoqIFRocmVzaG9sZCBpcyB1bnNwZWNpZmllZC4gKi9cbiAgICBIYXJtQmxvY2tUaHJlc2hvbGRbXCJIQVJNX0JMT0NLX1RIUkVTSE9MRF9VTlNQRUNJRklFRFwiXSA9IFwiSEFSTV9CTE9DS19USFJFU0hPTERfVU5TUEVDSUZJRURcIjtcbiAgICAvKiogQ29udGVudCB3aXRoIE5FR0xJR0lCTEUgd2lsbCBiZSBhbGxvd2VkLiAqL1xuICAgIEhhcm1CbG9ja1RocmVzaG9sZFtcIkJMT0NLX0xPV19BTkRfQUJPVkVcIl0gPSBcIkJMT0NLX0xPV19BTkRfQUJPVkVcIjtcbiAgICAvKiogQ29udGVudCB3aXRoIE5FR0xJR0lCTEUgYW5kIExPVyB3aWxsIGJlIGFsbG93ZWQuICovXG4gICAgSGFybUJsb2NrVGhyZXNob2xkW1wiQkxPQ0tfTUVESVVNX0FORF9BQk9WRVwiXSA9IFwiQkxPQ0tfTUVESVVNX0FORF9BQk9WRVwiO1xuICAgIC8qKiBDb250ZW50IHdpdGggTkVHTElHSUJMRSwgTE9XLCBhbmQgTUVESVVNIHdpbGwgYmUgYWxsb3dlZC4gKi9cbiAgICBIYXJtQmxvY2tUaHJlc2hvbGRbXCJCTE9DS19PTkxZX0hJR0hcIl0gPSBcIkJMT0NLX09OTFlfSElHSFwiO1xuICAgIC8qKiBBbGwgY29udGVudCB3aWxsIGJlIGFsbG93ZWQuICovXG4gICAgSGFybUJsb2NrVGhyZXNob2xkW1wiQkxPQ0tfTk9ORVwiXSA9IFwiQkxPQ0tfTk9ORVwiO1xufSkoSGFybUJsb2NrVGhyZXNob2xkIHx8IChIYXJtQmxvY2tUaHJlc2hvbGQgPSB7fSkpO1xuLyoqXG4gKiBQcm9iYWJpbGl0eSB0aGF0IGEgcHJvbXB0IG9yIGNhbmRpZGF0ZSBtYXRjaGVzIGEgaGFybSBjYXRlZ29yeS5cbiAqIEBwdWJsaWNcbiAqL1xudmFyIEhhcm1Qcm9iYWJpbGl0eTtcbihmdW5jdGlvbiAoSGFybVByb2JhYmlsaXR5KSB7XG4gICAgLyoqIFByb2JhYmlsaXR5IGlzIHVuc3BlY2lmaWVkLiAqL1xuICAgIEhhcm1Qcm9iYWJpbGl0eVtcIkhBUk1fUFJPQkFCSUxJVFlfVU5TUEVDSUZJRURcIl0gPSBcIkhBUk1fUFJPQkFCSUxJVFlfVU5TUEVDSUZJRURcIjtcbiAgICAvKiogQ29udGVudCBoYXMgYSBuZWdsaWdpYmxlIGNoYW5jZSBvZiBiZWluZyB1bnNhZmUuICovXG4gICAgSGFybVByb2JhYmlsaXR5W1wiTkVHTElHSUJMRVwiXSA9IFwiTkVHTElHSUJMRVwiO1xuICAgIC8qKiBDb250ZW50IGhhcyBhIGxvdyBjaGFuY2Ugb2YgYmVpbmcgdW5zYWZlLiAqL1xuICAgIEhhcm1Qcm9iYWJpbGl0eVtcIkxPV1wiXSA9IFwiTE9XXCI7XG4gICAgLyoqIENvbnRlbnQgaGFzIGEgbWVkaXVtIGNoYW5jZSBvZiBiZWluZyB1bnNhZmUuICovXG4gICAgSGFybVByb2JhYmlsaXR5W1wiTUVESVVNXCJdID0gXCJNRURJVU1cIjtcbiAgICAvKiogQ29udGVudCBoYXMgYSBoaWdoIGNoYW5jZSBvZiBiZWluZyB1bnNhZmUuICovXG4gICAgSGFybVByb2JhYmlsaXR5W1wiSElHSFwiXSA9IFwiSElHSFwiO1xufSkoSGFybVByb2JhYmlsaXR5IHx8IChIYXJtUHJvYmFiaWxpdHkgPSB7fSkpO1xuLyoqXG4gKiBSZWFzb24gdGhhdCBhIHByb21wdCB3YXMgYmxvY2tlZC5cbiAqIEBwdWJsaWNcbiAqL1xudmFyIEJsb2NrUmVhc29uO1xuKGZ1bmN0aW9uIChCbG9ja1JlYXNvbikge1xuICAgIC8vIEEgYmxvY2tlZCByZWFzb24gd2FzIG5vdCBzcGVjaWZpZWQuXG4gICAgQmxvY2tSZWFzb25bXCJCTE9DS0VEX1JFQVNPTl9VTlNQRUNJRklFRFwiXSA9IFwiQkxPQ0tFRF9SRUFTT05fVU5TUEVDSUZJRURcIjtcbiAgICAvLyBDb250ZW50IHdhcyBibG9ja2VkIGJ5IHNhZmV0eSBzZXR0aW5ncy5cbiAgICBCbG9ja1JlYXNvbltcIlNBRkVUWVwiXSA9IFwiU0FGRVRZXCI7XG4gICAgLy8gQ29udGVudCB3YXMgYmxvY2tlZCwgYnV0IHRoZSByZWFzb24gaXMgdW5jYXRlZ29yaXplZC5cbiAgICBCbG9ja1JlYXNvbltcIk9USEVSXCJdID0gXCJPVEhFUlwiO1xufSkoQmxvY2tSZWFzb24gfHwgKEJsb2NrUmVhc29uID0ge30pKTtcbi8qKlxuICogUmVhc29uIHRoYXQgYSBjYW5kaWRhdGUgZmluaXNoZWQuXG4gKiBAcHVibGljXG4gKi9cbnZhciBGaW5pc2hSZWFzb247XG4oZnVuY3Rpb24gKEZpbmlzaFJlYXNvbikge1xuICAgIC8vIERlZmF1bHQgdmFsdWUuIFRoaXMgdmFsdWUgaXMgdW51c2VkLlxuICAgIEZpbmlzaFJlYXNvbltcIkZJTklTSF9SRUFTT05fVU5TUEVDSUZJRURcIl0gPSBcIkZJTklTSF9SRUFTT05fVU5TUEVDSUZJRURcIjtcbiAgICAvLyBOYXR1cmFsIHN0b3AgcG9pbnQgb2YgdGhlIG1vZGVsIG9yIHByb3ZpZGVkIHN0b3Agc2VxdWVuY2UuXG4gICAgRmluaXNoUmVhc29uW1wiU1RPUFwiXSA9IFwiU1RPUFwiO1xuICAgIC8vIFRoZSBtYXhpbXVtIG51bWJlciBvZiB0b2tlbnMgYXMgc3BlY2lmaWVkIGluIHRoZSByZXF1ZXN0IHdhcyByZWFjaGVkLlxuICAgIEZpbmlzaFJlYXNvbltcIk1BWF9UT0tFTlNcIl0gPSBcIk1BWF9UT0tFTlNcIjtcbiAgICAvLyBUaGUgY2FuZGlkYXRlIGNvbnRlbnQgd2FzIGZsYWdnZWQgZm9yIHNhZmV0eSByZWFzb25zLlxuICAgIEZpbmlzaFJlYXNvbltcIlNBRkVUWVwiXSA9IFwiU0FGRVRZXCI7XG4gICAgLy8gVGhlIGNhbmRpZGF0ZSBjb250ZW50IHdhcyBmbGFnZ2VkIGZvciByZWNpdGF0aW9uIHJlYXNvbnMuXG4gICAgRmluaXNoUmVhc29uW1wiUkVDSVRBVElPTlwiXSA9IFwiUkVDSVRBVElPTlwiO1xuICAgIC8vIFRoZSBjYW5kaWRhdGUgY29udGVudCB3YXMgZmxhZ2dlZCBmb3IgdXNpbmcgYW4gdW5zdXBwb3J0ZWQgbGFuZ3VhZ2UuXG4gICAgRmluaXNoUmVhc29uW1wiTEFOR1VBR0VcIl0gPSBcIkxBTkdVQUdFXCI7XG4gICAgLy8gVG9rZW4gZ2VuZXJhdGlvbiBzdG9wcGVkIGJlY2F1c2UgdGhlIGNvbnRlbnQgY29udGFpbnMgZm9yYmlkZGVuIHRlcm1zLlxuICAgIEZpbmlzaFJlYXNvbltcIkJMT0NLTElTVFwiXSA9IFwiQkxPQ0tMSVNUXCI7XG4gICAgLy8gVG9rZW4gZ2VuZXJhdGlvbiBzdG9wcGVkIGZvciBwb3RlbnRpYWxseSBjb250YWluaW5nIHByb2hpYml0ZWQgY29udGVudC5cbiAgICBGaW5pc2hSZWFzb25bXCJQUk9ISUJJVEVEX0NPTlRFTlRcIl0gPSBcIlBST0hJQklURURfQ09OVEVOVFwiO1xuICAgIC8vIFRva2VuIGdlbmVyYXRpb24gc3RvcHBlZCBiZWNhdXNlIHRoZSBjb250ZW50IHBvdGVudGlhbGx5IGNvbnRhaW5zIFNlbnNpdGl2ZSBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiAoU1BJSSkuXG4gICAgRmluaXNoUmVhc29uW1wiU1BJSVwiXSA9IFwiU1BJSVwiO1xuICAgIC8vIFRoZSBmdW5jdGlvbiBjYWxsIGdlbmVyYXRlZCBieSB0aGUgbW9kZWwgaXMgaW52YWxpZC5cbiAgICBGaW5pc2hSZWFzb25bXCJNQUxGT1JNRURfRlVOQ1RJT05fQ0FMTFwiXSA9IFwiTUFMRk9STUVEX0ZVTkNUSU9OX0NBTExcIjtcbiAgICAvLyBVbmtub3duIHJlYXNvbi5cbiAgICBGaW5pc2hSZWFzb25bXCJPVEhFUlwiXSA9IFwiT1RIRVJcIjtcbn0pKEZpbmlzaFJlYXNvbiB8fCAoRmluaXNoUmVhc29uID0ge30pKTtcbi8qKlxuICogVGFzayB0eXBlIGZvciBlbWJlZGRpbmcgY29udGVudC5cbiAqIEBwdWJsaWNcbiAqL1xudmFyIFRhc2tUeXBlO1xuKGZ1bmN0aW9uIChUYXNrVHlwZSkge1xuICAgIFRhc2tUeXBlW1wiVEFTS19UWVBFX1VOU1BFQ0lGSUVEXCJdID0gXCJUQVNLX1RZUEVfVU5TUEVDSUZJRURcIjtcbiAgICBUYXNrVHlwZVtcIlJFVFJJRVZBTF9RVUVSWVwiXSA9IFwiUkVUUklFVkFMX1FVRVJZXCI7XG4gICAgVGFza1R5cGVbXCJSRVRSSUVWQUxfRE9DVU1FTlRcIl0gPSBcIlJFVFJJRVZBTF9ET0NVTUVOVFwiO1xuICAgIFRhc2tUeXBlW1wiU0VNQU5USUNfU0lNSUxBUklUWVwiXSA9IFwiU0VNQU5USUNfU0lNSUxBUklUWVwiO1xuICAgIFRhc2tUeXBlW1wiQ0xBU1NJRklDQVRJT05cIl0gPSBcIkNMQVNTSUZJQ0FUSU9OXCI7XG4gICAgVGFza1R5cGVbXCJDTFVTVEVSSU5HXCJdID0gXCJDTFVTVEVSSU5HXCI7XG59KShUYXNrVHlwZSB8fCAoVGFza1R5cGUgPSB7fSkpO1xuLyoqXG4gKiBAcHVibGljXG4gKi9cbnZhciBGdW5jdGlvbkNhbGxpbmdNb2RlO1xuKGZ1bmN0aW9uIChGdW5jdGlvbkNhbGxpbmdNb2RlKSB7XG4gICAgLy8gVW5zcGVjaWZpZWQgZnVuY3Rpb24gY2FsbGluZyBtb2RlLiBUaGlzIHZhbHVlIHNob3VsZCBub3QgYmUgdXNlZC5cbiAgICBGdW5jdGlvbkNhbGxpbmdNb2RlW1wiTU9ERV9VTlNQRUNJRklFRFwiXSA9IFwiTU9ERV9VTlNQRUNJRklFRFwiO1xuICAgIC8vIERlZmF1bHQgbW9kZWwgYmVoYXZpb3IsIG1vZGVsIGRlY2lkZXMgdG8gcHJlZGljdCBlaXRoZXIgYSBmdW5jdGlvbiBjYWxsXG4gICAgLy8gb3IgYSBuYXR1cmFsIGxhbmd1YWdlIHJlcHNwb3NlLlxuICAgIEZ1bmN0aW9uQ2FsbGluZ01vZGVbXCJBVVRPXCJdID0gXCJBVVRPXCI7XG4gICAgLy8gTW9kZWwgaXMgY29uc3RyYWluZWQgdG8gYWx3YXlzIHByZWRpY3RpbmcgYSBmdW5jdGlvbiBjYWxsIG9ubHkuXG4gICAgLy8gSWYgXCJhbGxvd2VkX2Z1bmN0aW9uX25hbWVzXCIgYXJlIHNldCwgdGhlIHByZWRpY3RlZCBmdW5jdGlvbiBjYWxsIHdpbGwgYmVcbiAgICAvLyBsaW1pdGVkIHRvIGFueSBvbmUgb2YgXCJhbGxvd2VkX2Z1bmN0aW9uX25hbWVzXCIsIGVsc2UgdGhlIHByZWRpY3RlZFxuICAgIC8vIGZ1bmN0aW9uIGNhbGwgd2lsbCBiZSBhbnkgb25lIG9mIHRoZSBwcm92aWRlZCBcImZ1bmN0aW9uX2RlY2xhcmF0aW9uc1wiLlxuICAgIEZ1bmN0aW9uQ2FsbGluZ01vZGVbXCJBTllcIl0gPSBcIkFOWVwiO1xuICAgIC8vIE1vZGVsIHdpbGwgbm90IHByZWRpY3QgYW55IGZ1bmN0aW9uIGNhbGwuIE1vZGVsIGJlaGF2aW9yIGlzIHNhbWUgYXMgd2hlblxuICAgIC8vIG5vdCBwYXNzaW5nIGFueSBmdW5jdGlvbiBkZWNsYXJhdGlvbnMuXG4gICAgRnVuY3Rpb25DYWxsaW5nTW9kZVtcIk5PTkVcIl0gPSBcIk5PTkVcIjtcbn0pKEZ1bmN0aW9uQ2FsbGluZ01vZGUgfHwgKEZ1bmN0aW9uQ2FsbGluZ01vZGUgPSB7fSkpO1xuLyoqXG4gKiBUaGUgbW9kZSBvZiB0aGUgcHJlZGljdG9yIHRvIGJlIHVzZWQgaW4gZHluYW1pYyByZXRyaWV2YWwuXG4gKiBAcHVibGljXG4gKi9cbnZhciBEeW5hbWljUmV0cmlldmFsTW9kZTtcbihmdW5jdGlvbiAoRHluYW1pY1JldHJpZXZhbE1vZGUpIHtcbiAgICAvLyBVbnNwZWNpZmllZCBmdW5jdGlvbiBjYWxsaW5nIG1vZGUuIFRoaXMgdmFsdWUgc2hvdWxkIG5vdCBiZSB1c2VkLlxuICAgIER5bmFtaWNSZXRyaWV2YWxNb2RlW1wiTU9ERV9VTlNQRUNJRklFRFwiXSA9IFwiTU9ERV9VTlNQRUNJRklFRFwiO1xuICAgIC8vIFJ1biByZXRyaWV2YWwgb25seSB3aGVuIHN5c3RlbSBkZWNpZGVzIGl0IGlzIG5lY2Vzc2FyeS5cbiAgICBEeW5hbWljUmV0cmlldmFsTW9kZVtcIk1PREVfRFlOQU1JQ1wiXSA9IFwiTU9ERV9EWU5BTUlDXCI7XG59KShEeW5hbWljUmV0cmlldmFsTW9kZSB8fCAoRHluYW1pY1JldHJpZXZhbE1vZGUgPSB7fSkpO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyNCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBCYXNpYyBlcnJvciB0eXBlIGZvciB0aGlzIFNESy5cbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgICAgICBzdXBlcihgW0dvb2dsZUdlbmVyYXRpdmVBSSBFcnJvcl06ICR7bWVzc2FnZX1gKTtcbiAgICB9XG59XG4vKipcbiAqIEVycm9ycyBpbiB0aGUgY29udGVudHMgb2YgYSByZXNwb25zZSBmcm9tIHRoZSBtb2RlbC4gVGhpcyBpbmNsdWRlcyBwYXJzaW5nXG4gKiBlcnJvcnMsIG9yIHJlc3BvbnNlcyBpbmNsdWRpbmcgYSBzYWZldHkgYmxvY2sgcmVhc29uLlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBHb29nbGVHZW5lcmF0aXZlQUlSZXNwb25zZUVycm9yIGV4dGVuZHMgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHJlc3BvbnNlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgfVxufVxuLyoqXG4gKiBFcnJvciBjbGFzcyBjb3ZlcmluZyBIVFRQIGVycm9ycyB3aGVuIGNhbGxpbmcgdGhlIHNlcnZlci4gSW5jbHVkZXMgSFRUUFxuICogc3RhdHVzLCBzdGF0dXNUZXh0LCBhbmQgb3B0aW9uYWwgZGV0YWlscywgaWYgcHJvdmlkZWQgaW4gdGhlIHNlcnZlciByZXNwb25zZS5cbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgR29vZ2xlR2VuZXJhdGl2ZUFJRmV0Y2hFcnJvciBleHRlbmRzIEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBzdGF0dXMsIHN0YXR1c1RleHQsIGVycm9yRGV0YWlscykge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XG4gICAgICAgIHRoaXMuZXJyb3JEZXRhaWxzID0gZXJyb3JEZXRhaWxzO1xuICAgIH1cbn1cbi8qKlxuICogRXJyb3JzIGluIHRoZSBjb250ZW50cyBvZiBhIHJlcXVlc3Qgb3JpZ2luYXRpbmcgZnJvbSB1c2VyIGlucHV0LlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBHb29nbGVHZW5lcmF0aXZlQUlSZXF1ZXN0SW5wdXRFcnJvciBleHRlbmRzIEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yIHtcbn1cbi8qKlxuICogRXJyb3IgdGhyb3duIHdoZW4gYSByZXF1ZXN0IGlzIGFib3J0ZWQsIGVpdGhlciBkdWUgdG8gYSB0aW1lb3V0IG9yXG4gKiBpbnRlbnRpb25hbCBjYW5jZWxsYXRpb24gYnkgdGhlIHVzZXIuXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIEdvb2dsZUdlbmVyYXRpdmVBSUFib3J0RXJyb3IgZXh0ZW5kcyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvciB7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDI0IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5jb25zdCBERUZBVUxUX0JBU0VfVVJMID0gXCJodHRwczovL2dlbmVyYXRpdmVsYW5ndWFnZS5nb29nbGVhcGlzLmNvbVwiO1xuY29uc3QgREVGQVVMVF9BUElfVkVSU0lPTiA9IFwidjFiZXRhXCI7XG4vKipcbiAqIFdlIGNhbid0IGByZXF1aXJlYCBwYWNrYWdlLmpzb24gaWYgdGhpcyBydW5zIG9uIHdlYi4gV2Ugd2lsbCB1c2Ugcm9sbHVwIHRvXG4gKiBzd2FwIGluIHRoZSB2ZXJzaW9uIG51bWJlciBoZXJlIGF0IGJ1aWxkIHRpbWUuXG4gKi9cbmNvbnN0IFBBQ0tBR0VfVkVSU0lPTiA9IFwiMC4yNC4xXCI7XG5jb25zdCBQQUNLQUdFX0xPR19IRUFERVIgPSBcImdlbmFpLWpzXCI7XG52YXIgVGFzaztcbihmdW5jdGlvbiAoVGFzaykge1xuICAgIFRhc2tbXCJHRU5FUkFURV9DT05URU5UXCJdID0gXCJnZW5lcmF0ZUNvbnRlbnRcIjtcbiAgICBUYXNrW1wiU1RSRUFNX0dFTkVSQVRFX0NPTlRFTlRcIl0gPSBcInN0cmVhbUdlbmVyYXRlQ29udGVudFwiO1xuICAgIFRhc2tbXCJDT1VOVF9UT0tFTlNcIl0gPSBcImNvdW50VG9rZW5zXCI7XG4gICAgVGFza1tcIkVNQkVEX0NPTlRFTlRcIl0gPSBcImVtYmVkQ29udGVudFwiO1xuICAgIFRhc2tbXCJCQVRDSF9FTUJFRF9DT05URU5UU1wiXSA9IFwiYmF0Y2hFbWJlZENvbnRlbnRzXCI7XG59KShUYXNrIHx8IChUYXNrID0ge30pKTtcbmNsYXNzIFJlcXVlc3RVcmwge1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsLCB0YXNrLCBhcGlLZXksIHN0cmVhbSwgcmVxdWVzdE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgICAgICB0aGlzLmFwaUtleSA9IGFwaUtleTtcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBzdHJlYW07XG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IGFwaVZlcnNpb24gPSAoKF9hID0gdGhpcy5yZXF1ZXN0T3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwaVZlcnNpb24pIHx8IERFRkFVTFRfQVBJX1ZFUlNJT047XG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSAoKF9iID0gdGhpcy5yZXF1ZXN0T3B0aW9ucykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmJhc2VVcmwpIHx8IERFRkFVTFRfQkFTRV9VUkw7XG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNlVXJsfS8ke2FwaVZlcnNpb259LyR7dGhpcy5tb2RlbH06JHt0aGlzLnRhc2t9YDtcbiAgICAgICAgaWYgKHRoaXMuc3RyZWFtKSB7XG4gICAgICAgICAgICB1cmwgKz0gXCI/YWx0PXNzZVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxufVxuLyoqXG4gKiBTaW1wbGUsIGJ1dCBtYXkgYmVjb21lIG1vcmUgY29tcGxleCBpZiB3ZSBhZGQgbW9yZSB2ZXJzaW9ucyB0byBsb2cuXG4gKi9cbmZ1bmN0aW9uIGdldENsaWVudEhlYWRlcnMocmVxdWVzdE9wdGlvbnMpIHtcbiAgICBjb25zdCBjbGllbnRIZWFkZXJzID0gW107XG4gICAgaWYgKHJlcXVlc3RPcHRpb25zID09PSBudWxsIHx8IHJlcXVlc3RPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXF1ZXN0T3B0aW9ucy5hcGlDbGllbnQpIHtcbiAgICAgICAgY2xpZW50SGVhZGVycy5wdXNoKHJlcXVlc3RPcHRpb25zLmFwaUNsaWVudCk7XG4gICAgfVxuICAgIGNsaWVudEhlYWRlcnMucHVzaChgJHtQQUNLQUdFX0xPR19IRUFERVJ9LyR7UEFDS0FHRV9WRVJTSU9OfWApO1xuICAgIHJldHVybiBjbGllbnRIZWFkZXJzLmpvaW4oXCIgXCIpO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0SGVhZGVycyh1cmwpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwieC1nb29nLWFwaS1jbGllbnRcIiwgZ2V0Q2xpZW50SGVhZGVycyh1cmwucmVxdWVzdE9wdGlvbnMpKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIngtZ29vZy1hcGkta2V5XCIsIHVybC5hcGlLZXkpO1xuICAgIGxldCBjdXN0b21IZWFkZXJzID0gKF9hID0gdXJsLnJlcXVlc3RPcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY3VzdG9tSGVhZGVycztcbiAgICBpZiAoY3VzdG9tSGVhZGVycykge1xuICAgICAgICBpZiAoIShjdXN0b21IZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY3VzdG9tSGVhZGVycyA9IG5ldyBIZWFkZXJzKGN1c3RvbUhlYWRlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJUmVxdWVzdElucHV0RXJyb3IoYHVuYWJsZSB0byBjb252ZXJ0IGN1c3RvbUhlYWRlcnMgdmFsdWUgJHtKU09OLnN0cmluZ2lmeShjdXN0b21IZWFkZXJzKX0gdG8gSGVhZGVyczogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBbaGVhZGVyTmFtZSwgaGVhZGVyVmFsdWVdIG9mIGN1c3RvbUhlYWRlcnMuZW50cmllcygpKSB7XG4gICAgICAgICAgICBpZiAoaGVhZGVyTmFtZSA9PT0gXCJ4LWdvb2ctYXBpLWtleVwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSVJlcXVlc3RJbnB1dEVycm9yKGBDYW5ub3Qgc2V0IHJlc2VydmVkIGhlYWRlciBuYW1lICR7aGVhZGVyTmFtZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhlYWRlck5hbWUgPT09IFwieC1nb29nLWFwaS1jbGllbnRcIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlSZXF1ZXN0SW5wdXRFcnJvcihgSGVhZGVyIG5hbWUgJHtoZWFkZXJOYW1lfSBjYW4gb25seSBiZSBzZXQgdXNpbmcgdGhlIGFwaUNsaWVudCBmaWVsZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoaGVhZGVyTmFtZSwgaGVhZGVyVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoZWFkZXJzO1xufVxuYXN5bmMgZnVuY3Rpb24gY29uc3RydWN0TW9kZWxSZXF1ZXN0KG1vZGVsLCB0YXNrLCBhcGlLZXksIHN0cmVhbSwgYm9keSwgcmVxdWVzdE9wdGlvbnMpIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgUmVxdWVzdFVybChtb2RlbCwgdGFzaywgYXBpS2V5LCBzdHJlYW0sIHJlcXVlc3RPcHRpb25zKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHVybC50b1N0cmluZygpLFxuICAgICAgICBmZXRjaE9wdGlvbnM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYnVpbGRGZXRjaE9wdGlvbnMocmVxdWVzdE9wdGlvbnMpKSwgeyBtZXRob2Q6IFwiUE9TVFwiLCBoZWFkZXJzOiBhd2FpdCBnZXRIZWFkZXJzKHVybCksIGJvZHkgfSksXG4gICAgfTtcbn1cbmFzeW5jIGZ1bmN0aW9uIG1ha2VNb2RlbFJlcXVlc3QobW9kZWwsIHRhc2ssIGFwaUtleSwgc3RyZWFtLCBib2R5LCByZXF1ZXN0T3B0aW9ucyA9IHt9LCBcbi8vIEFsbG93cyB0aGlzIHRvIGJlIHN0dWJiZWQgZm9yIHRlc3RzXG5mZXRjaEZuID0gZmV0Y2gpIHtcbiAgICBjb25zdCB7IHVybCwgZmV0Y2hPcHRpb25zIH0gPSBhd2FpdCBjb25zdHJ1Y3RNb2RlbFJlcXVlc3QobW9kZWwsIHRhc2ssIGFwaUtleSwgc3RyZWFtLCBib2R5LCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHVybCwgZmV0Y2hPcHRpb25zLCBmZXRjaEZuKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0KHVybCwgZmV0Y2hPcHRpb25zLCBmZXRjaEZuID0gZmV0Y2gpIHtcbiAgICBsZXQgcmVzcG9uc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaEZuKHVybCwgZmV0Y2hPcHRpb25zKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgaGFuZGxlUmVzcG9uc2VFcnJvcihlLCB1cmwpO1xuICAgIH1cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGF3YWl0IGhhbmRsZVJlc3BvbnNlTm90T2socmVzcG9uc2UsIHVybCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlRXJyb3IoZSwgdXJsKSB7XG4gICAgbGV0IGVyciA9IGU7XG4gICAgaWYgKGVyci5uYW1lID09PSBcIkFib3J0RXJyb3JcIikge1xuICAgICAgICBlcnIgPSBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJQWJvcnRFcnJvcihgUmVxdWVzdCBhYm9ydGVkIHdoZW4gZmV0Y2hpbmcgJHt1cmwudG9TdHJpbmcoKX06ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICBlcnIuc3RhY2sgPSBlLnN0YWNrO1xuICAgIH1cbiAgICBlbHNlIGlmICghKGUgaW5zdGFuY2VvZiBHb29nbGVHZW5lcmF0aXZlQUlGZXRjaEVycm9yIHx8XG4gICAgICAgIGUgaW5zdGFuY2VvZiBHb29nbGVHZW5lcmF0aXZlQUlSZXF1ZXN0SW5wdXRFcnJvcikpIHtcbiAgICAgICAgZXJyID0gbmV3IEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yKGBFcnJvciBmZXRjaGluZyBmcm9tICR7dXJsLnRvU3RyaW5nKCl9OiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgZXJyLnN0YWNrID0gZS5zdGFjaztcbiAgICB9XG4gICAgdGhyb3cgZXJyO1xufVxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2VOb3RPayhyZXNwb25zZSwgdXJsKSB7XG4gICAgbGV0IG1lc3NhZ2UgPSBcIlwiO1xuICAgIGxldCBlcnJvckRldGFpbHM7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgbWVzc2FnZSA9IGpzb24uZXJyb3IubWVzc2FnZTtcbiAgICAgICAgaWYgKGpzb24uZXJyb3IuZGV0YWlscykge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgICR7SlNPTi5zdHJpbmdpZnkoanNvbi5lcnJvci5kZXRhaWxzKX1gO1xuICAgICAgICAgICAgZXJyb3JEZXRhaWxzID0ganNvbi5lcnJvci5kZXRhaWxzO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlnbm9yZWRcbiAgICB9XG4gICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSUZldGNoRXJyb3IoYEVycm9yIGZldGNoaW5nIGZyb20gJHt1cmwudG9TdHJpbmcoKX06IFske3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fV0gJHttZXNzYWdlfWAsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCwgZXJyb3JEZXRhaWxzKTtcbn1cbi8qKlxuICogR2VuZXJhdGVzIHRoZSByZXF1ZXN0IG9wdGlvbnMgdG8gYmUgcGFzc2VkIHRvIHRoZSBmZXRjaCBBUEkuXG4gKiBAcGFyYW0gcmVxdWVzdE9wdGlvbnMgLSBUaGUgdXNlci1kZWZpbmVkIHJlcXVlc3Qgb3B0aW9ucy5cbiAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgcmVxdWVzdCBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBidWlsZEZldGNoT3B0aW9ucyhyZXF1ZXN0T3B0aW9ucykge1xuICAgIGNvbnN0IGZldGNoT3B0aW9ucyA9IHt9O1xuICAgIGlmICgocmVxdWVzdE9wdGlvbnMgPT09IG51bGwgfHwgcmVxdWVzdE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlcXVlc3RPcHRpb25zLnNpZ25hbCkgIT09IHVuZGVmaW5lZCB8fCAocmVxdWVzdE9wdGlvbnMgPT09IG51bGwgfHwgcmVxdWVzdE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlcXVlc3RPcHRpb25zLnRpbWVvdXQpID49IDApIHtcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgaWYgKChyZXF1ZXN0T3B0aW9ucyA9PT0gbnVsbCB8fCByZXF1ZXN0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVxdWVzdE9wdGlvbnMudGltZW91dCkgPj0gMCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250cm9sbGVyLmFib3J0KCksIHJlcXVlc3RPcHRpb25zLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXF1ZXN0T3B0aW9ucyA9PT0gbnVsbCB8fCByZXF1ZXN0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVxdWVzdE9wdGlvbnMuc2lnbmFsKSB7XG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9ucy5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaE9wdGlvbnMuc2lnbmFsID0gY29udHJvbGxlci5zaWduYWw7XG4gICAgfVxuICAgIHJldHVybiBmZXRjaE9wdGlvbnM7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDI0IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIEFkZHMgY29udmVuaWVuY2UgaGVscGVyIG1ldGhvZHMgdG8gYSByZXNwb25zZSBvYmplY3QsIGluY2x1ZGluZyBzdHJlYW1cbiAqIGNodW5rcyAoYXMgbG9uZyBhcyBlYWNoIGNodW5rIGlzIGEgY29tcGxldGUgR2VuZXJhdGVDb250ZW50UmVzcG9uc2UgSlNPTikuXG4gKi9cbmZ1bmN0aW9uIGFkZEhlbHBlcnMocmVzcG9uc2UpIHtcbiAgICByZXNwb25zZS50ZXh0ID0gKCkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuY2FuZGlkYXRlcyAmJiByZXNwb25zZS5jYW5kaWRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5jYW5kaWRhdGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFRoaXMgcmVzcG9uc2UgaGFkICR7cmVzcG9uc2UuY2FuZGlkYXRlcy5sZW5ndGh9IGAgK1xuICAgICAgICAgICAgICAgICAgICBgY2FuZGlkYXRlcy4gUmV0dXJuaW5nIHRleHQgZnJvbSB0aGUgZmlyc3QgY2FuZGlkYXRlIG9ubHkuIGAgK1xuICAgICAgICAgICAgICAgICAgICBgQWNjZXNzIHJlc3BvbnNlLmNhbmRpZGF0ZXMgZGlyZWN0bHkgdG8gdXNlIHRoZSBvdGhlciBjYW5kaWRhdGVzLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhZEJhZEZpbmlzaFJlYXNvbihyZXNwb25zZS5jYW5kaWRhdGVzWzBdKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlSZXNwb25zZUVycm9yKGAke2Zvcm1hdEJsb2NrRXJyb3JNZXNzYWdlKHJlc3BvbnNlKX1gLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0VGV4dChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UucHJvbXB0RmVlZGJhY2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlSZXNwb25zZUVycm9yKGBUZXh0IG5vdCBhdmFpbGFibGUuICR7Zm9ybWF0QmxvY2tFcnJvck1lc3NhZ2UocmVzcG9uc2UpfWAsIHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRPRE86IHJlbW92ZSBhdCBuZXh0IG1ham9yIHZlcnNpb25cbiAgICAgKi9cbiAgICByZXNwb25zZS5mdW5jdGlvbkNhbGwgPSAoKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5jYW5kaWRhdGVzICYmIHJlc3BvbnNlLmNhbmRpZGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNhbmRpZGF0ZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhpcyByZXNwb25zZSBoYWQgJHtyZXNwb25zZS5jYW5kaWRhdGVzLmxlbmd0aH0gYCArXG4gICAgICAgICAgICAgICAgICAgIGBjYW5kaWRhdGVzLiBSZXR1cm5pbmcgZnVuY3Rpb24gY2FsbHMgZnJvbSB0aGUgZmlyc3QgY2FuZGlkYXRlIG9ubHkuIGAgK1xuICAgICAgICAgICAgICAgICAgICBgQWNjZXNzIHJlc3BvbnNlLmNhbmRpZGF0ZXMgZGlyZWN0bHkgdG8gdXNlIHRoZSBvdGhlciBjYW5kaWRhdGVzLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhZEJhZEZpbmlzaFJlYXNvbihyZXNwb25zZS5jYW5kaWRhdGVzWzBdKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlSZXNwb25zZUVycm9yKGAke2Zvcm1hdEJsb2NrRXJyb3JNZXNzYWdlKHJlc3BvbnNlKX1gLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYHJlc3BvbnNlLmZ1bmN0aW9uQ2FsbCgpIGlzIGRlcHJlY2F0ZWQuIGAgK1xuICAgICAgICAgICAgICAgIGBVc2UgcmVzcG9uc2UuZnVuY3Rpb25DYWxscygpIGluc3RlYWQuYCk7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RnVuY3Rpb25DYWxscyhyZXNwb25zZSlbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UucHJvbXB0RmVlZGJhY2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlSZXNwb25zZUVycm9yKGBGdW5jdGlvbiBjYWxsIG5vdCBhdmFpbGFibGUuICR7Zm9ybWF0QmxvY2tFcnJvck1lc3NhZ2UocmVzcG9uc2UpfWAsIHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmVzcG9uc2UuZnVuY3Rpb25DYWxscyA9ICgpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmNhbmRpZGF0ZXMgJiYgcmVzcG9uc2UuY2FuZGlkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuY2FuZGlkYXRlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGlzIHJlc3BvbnNlIGhhZCAke3Jlc3BvbnNlLmNhbmRpZGF0ZXMubGVuZ3RofSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGNhbmRpZGF0ZXMuIFJldHVybmluZyBmdW5jdGlvbiBjYWxscyBmcm9tIHRoZSBmaXJzdCBjYW5kaWRhdGUgb25seS4gYCArXG4gICAgICAgICAgICAgICAgICAgIGBBY2Nlc3MgcmVzcG9uc2UuY2FuZGlkYXRlcyBkaXJlY3RseSB0byB1c2UgdGhlIG90aGVyIGNhbmRpZGF0ZXMuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFkQmFkRmluaXNoUmVhc29uKHJlc3BvbnNlLmNhbmRpZGF0ZXNbMF0pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSVJlc3BvbnNlRXJyb3IoYCR7Zm9ybWF0QmxvY2tFcnJvck1lc3NhZ2UocmVzcG9uc2UpfWAsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGdW5jdGlvbkNhbGxzKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5wcm9tcHRGZWVkYmFjaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSVJlc3BvbnNlRXJyb3IoYEZ1bmN0aW9uIGNhbGwgbm90IGF2YWlsYWJsZS4gJHtmb3JtYXRCbG9ja0Vycm9yTWVzc2FnZShyZXNwb25zZSl9YCwgcmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG59XG4vKipcbiAqIFJldHVybnMgYWxsIHRleHQgZm91bmQgaW4gYWxsIHBhcnRzIG9mIGZpcnN0IGNhbmRpZGF0ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VGV4dChyZXNwb25zZSkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICBjb25zdCB0ZXh0U3RyaW5ncyA9IFtdO1xuICAgIGlmICgoX2IgPSAoX2EgPSByZXNwb25zZS5jYW5kaWRhdGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMF0uY29udGVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnBhcnRzKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiAoX2QgPSAoX2MgPSByZXNwb25zZS5jYW5kaWRhdGVzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NbMF0uY29udGVudCkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnBhcnRzKSB7XG4gICAgICAgICAgICBpZiAocGFydC50ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGV4dFN0cmluZ3MucHVzaChwYXJ0LnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcnQuZXhlY3V0YWJsZUNvZGUpIHtcbiAgICAgICAgICAgICAgICB0ZXh0U3RyaW5ncy5wdXNoKFwiXFxuYGBgXCIgK1xuICAgICAgICAgICAgICAgICAgICBwYXJ0LmV4ZWN1dGFibGVDb2RlLmxhbmd1YWdlICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgIHBhcnQuZXhlY3V0YWJsZUNvZGUuY29kZSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuYGBgXFxuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcnQuY29kZUV4ZWN1dGlvblJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRleHRTdHJpbmdzLnB1c2goXCJcXG5gYGBcXG5cIiArIHBhcnQuY29kZUV4ZWN1dGlvblJlc3VsdC5vdXRwdXQgKyBcIlxcbmBgYFxcblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGV4dFN0cmluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGV4dFN0cmluZ3Muam9pbihcIlwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbn1cbi8qKlxuICogUmV0dXJucyBmdW5jdGlvbkNhbGwgb2YgZmlyc3QgY2FuZGlkYXRlLlxuICovXG5mdW5jdGlvbiBnZXRGdW5jdGlvbkNhbGxzKHJlc3BvbnNlKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgIGNvbnN0IGZ1bmN0aW9uQ2FsbHMgPSBbXTtcbiAgICBpZiAoKF9iID0gKF9hID0gcmVzcG9uc2UuY2FuZGlkYXRlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdLmNvbnRlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5wYXJ0cykge1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgKF9kID0gKF9jID0gcmVzcG9uc2UuY2FuZGlkYXRlcykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jWzBdLmNvbnRlbnQpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5wYXJ0cykge1xuICAgICAgICAgICAgaWYgKHBhcnQuZnVuY3Rpb25DYWxsKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25DYWxscy5wdXNoKHBhcnQuZnVuY3Rpb25DYWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnVuY3Rpb25DYWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbkNhbGxzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59XG5jb25zdCBiYWRGaW5pc2hSZWFzb25zID0gW1xuICAgIEZpbmlzaFJlYXNvbi5SRUNJVEFUSU9OLFxuICAgIEZpbmlzaFJlYXNvbi5TQUZFVFksXG4gICAgRmluaXNoUmVhc29uLkxBTkdVQUdFLFxuXTtcbmZ1bmN0aW9uIGhhZEJhZEZpbmlzaFJlYXNvbihjYW5kaWRhdGUpIHtcbiAgICByZXR1cm4gKCEhY2FuZGlkYXRlLmZpbmlzaFJlYXNvbiAmJlxuICAgICAgICBiYWRGaW5pc2hSZWFzb25zLmluY2x1ZGVzKGNhbmRpZGF0ZS5maW5pc2hSZWFzb24pKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdEJsb2NrRXJyb3JNZXNzYWdlKHJlc3BvbnNlKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgbGV0IG1lc3NhZ2UgPSBcIlwiO1xuICAgIGlmICgoIXJlc3BvbnNlLmNhbmRpZGF0ZXMgfHwgcmVzcG9uc2UuY2FuZGlkYXRlcy5sZW5ndGggPT09IDApICYmXG4gICAgICAgIHJlc3BvbnNlLnByb21wdEZlZWRiYWNrKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gXCJSZXNwb25zZSB3YXMgYmxvY2tlZFwiO1xuICAgICAgICBpZiAoKF9hID0gcmVzcG9uc2UucHJvbXB0RmVlZGJhY2spID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ibG9ja1JlYXNvbikge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgIGR1ZSB0byAke3Jlc3BvbnNlLnByb21wdEZlZWRiYWNrLmJsb2NrUmVhc29ufWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChfYiA9IHJlc3BvbnNlLnByb21wdEZlZWRiYWNrKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYmxvY2tSZWFzb25NZXNzYWdlKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGA6ICR7cmVzcG9uc2UucHJvbXB0RmVlZGJhY2suYmxvY2tSZWFzb25NZXNzYWdlfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoKF9jID0gcmVzcG9uc2UuY2FuZGlkYXRlcykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jWzBdKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2FuZGlkYXRlID0gcmVzcG9uc2UuY2FuZGlkYXRlc1swXTtcbiAgICAgICAgaWYgKGhhZEJhZEZpbmlzaFJlYXNvbihmaXJzdENhbmRpZGF0ZSkpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gYENhbmRpZGF0ZSB3YXMgYmxvY2tlZCBkdWUgdG8gJHtmaXJzdENhbmRpZGF0ZS5maW5pc2hSZWFzb259YDtcbiAgICAgICAgICAgIGlmIChmaXJzdENhbmRpZGF0ZS5maW5pc2hNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSArPSBgOiAke2ZpcnN0Q2FuZGlkYXRlLmZpbmlzaE1lc3NhZ2V9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbnR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xyXG4gICAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xyXG59O1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyNCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuY29uc3QgcmVzcG9uc2VMaW5lUkUgPSAvXmRhdGFcXDogKC4qKSg/OlxcblxcbnxcXHJcXHJ8XFxyXFxuXFxyXFxuKS87XG4vKipcbiAqIFByb2Nlc3MgYSByZXNwb25zZS5ib2R5IHN0cmVhbSBmcm9tIHRoZSBiYWNrZW5kIGFuZCByZXR1cm4gYW5cbiAqIGl0ZXJhdG9yIHRoYXQgcHJvdmlkZXMgb25lIGNvbXBsZXRlIEdlbmVyYXRlQ29udGVudFJlc3BvbnNlIGF0IGEgdGltZVxuICogYW5kIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBzaW5nbGUgYWdncmVnYXRlZFxuICogR2VuZXJhdGVDb250ZW50UmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHJlc3BvbnNlIC0gUmVzcG9uc2UgZnJvbSBhIGZldGNoIGNhbGxcbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc1N0cmVhbShyZXNwb25zZSkge1xuICAgIGNvbnN0IGlucHV0U3RyZWFtID0gcmVzcG9uc2UuYm9keS5waXBlVGhyb3VnaChuZXcgVGV4dERlY29kZXJTdHJlYW0oXCJ1dGY4XCIsIHsgZmF0YWw6IHRydWUgfSkpO1xuICAgIGNvbnN0IHJlc3BvbnNlU3RyZWFtID0gZ2V0UmVzcG9uc2VTdHJlYW0oaW5wdXRTdHJlYW0pO1xuICAgIGNvbnN0IFtzdHJlYW0xLCBzdHJlYW0yXSA9IHJlc3BvbnNlU3RyZWFtLnRlZSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0cmVhbTogZ2VuZXJhdGVSZXNwb25zZVNlcXVlbmNlKHN0cmVhbTEpLFxuICAgICAgICByZXNwb25zZTogZ2V0UmVzcG9uc2VQcm9taXNlKHN0cmVhbTIpLFxuICAgIH07XG59XG5hc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZVByb21pc2Uoc3RyZWFtKSB7XG4gICAgY29uc3QgYWxsUmVzcG9uc2VzID0gW107XG4gICAgY29uc3QgcmVhZGVyID0gc3RyZWFtLmdldFJlYWRlcigpO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICByZXR1cm4gYWRkSGVscGVycyhhZ2dyZWdhdGVSZXNwb25zZXMoYWxsUmVzcG9uc2VzKSk7XG4gICAgICAgIH1cbiAgICAgICAgYWxsUmVzcG9uc2VzLnB1c2godmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdlbmVyYXRlUmVzcG9uc2VTZXF1ZW5jZShzdHJlYW0pIHtcbiAgICByZXR1cm4gX19hc3luY0dlbmVyYXRvcih0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKiBnZW5lcmF0ZVJlc3BvbnNlU2VxdWVuY2VfMSgpIHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gc3RyZWFtLmdldFJlYWRlcigpO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0geWllbGQgX19hd2FpdChyZWFkZXIucmVhZCgpKTtcbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5aWVsZCB5aWVsZCBfX2F3YWl0KGFkZEhlbHBlcnModmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBSZWFkcyBhIHJhdyBzdHJlYW0gZnJvbSB0aGUgZmV0Y2ggcmVzcG9uc2UgYW5kIGpvaW4gaW5jb21wbGV0ZVxuICogY2h1bmtzLCByZXR1cm5pbmcgYSBuZXcgc3RyZWFtIHRoYXQgcHJvdmlkZXMgYSBzaW5nbGUgY29tcGxldGVcbiAqIEdlbmVyYXRlQ29udGVudFJlc3BvbnNlIGluIGVhY2ggaXRlcmF0aW9uLlxuICovXG5mdW5jdGlvbiBnZXRSZXNwb25zZVN0cmVhbShpbnB1dFN0cmVhbSkge1xuICAgIGNvbnN0IHJlYWRlciA9IGlucHV0U3RyZWFtLmdldFJlYWRlcigpO1xuICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBSZWFkYWJsZVN0cmVhbSh7XG4gICAgICAgIHN0YXJ0KGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGV4dCA9IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gcHVtcCgpO1xuICAgICAgICAgICAgZnVuY3Rpb24gcHVtcCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVhZGVyXG4gICAgICAgICAgICAgICAgICAgIC5yZWFkKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHsgdmFsdWUsIGRvbmUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZXJyb3IobmV3IEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIHN0cmVhbVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUZXh0ICs9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBjdXJyZW50VGV4dC5tYXRjaChyZXNwb25zZUxpbmVSRSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZWRSZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZFJlc3BvbnNlID0gSlNPTi5wYXJzZShtYXRjaFsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZXJyb3IobmV3IEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yKGBFcnJvciBwYXJzaW5nIEpTT04gcmVzcG9uc2U6IFwiJHttYXRjaFsxXX1cImApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUocGFyc2VkUmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRleHQgPSBjdXJyZW50VGV4dC5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gY3VycmVudFRleHQubWF0Y2gocmVzcG9uc2VMaW5lUkUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwdW1wKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlcnIgPSBlO1xuICAgICAgICAgICAgICAgICAgICBlcnIuc3RhY2sgPSBlLnN0YWNrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLm5hbWUgPT09IFwiQWJvcnRFcnJvclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIgPSBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJQWJvcnRFcnJvcihcIlJlcXVlc3QgYWJvcnRlZCB3aGVuIHJlYWRpbmcgZnJvbSB0aGUgc3RyZWFtXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyID0gbmV3IEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yKFwiRXJyb3IgcmVhZGluZyBmcm9tIHRoZSBzdHJlYW1cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBzdHJlYW07XG59XG4vKipcbiAqIEFnZ3JlZ2F0ZXMgYW4gYXJyYXkgb2YgYEdlbmVyYXRlQ29udGVudFJlc3BvbnNlYHMgaW50byBhIHNpbmdsZVxuICogR2VuZXJhdGVDb250ZW50UmVzcG9uc2UuXG4gKi9cbmZ1bmN0aW9uIGFnZ3JlZ2F0ZVJlc3BvbnNlcyhyZXNwb25zZXMpIHtcbiAgICBjb25zdCBsYXN0UmVzcG9uc2UgPSByZXNwb25zZXNbcmVzcG9uc2VzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGFnZ3JlZ2F0ZWRSZXNwb25zZSA9IHtcbiAgICAgICAgcHJvbXB0RmVlZGJhY2s6IGxhc3RSZXNwb25zZSA9PT0gbnVsbCB8fCBsYXN0UmVzcG9uc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxhc3RSZXNwb25zZS5wcm9tcHRGZWVkYmFjayxcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcmVzcG9uc2Ugb2YgcmVzcG9uc2VzKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5jYW5kaWRhdGVzKSB7XG4gICAgICAgICAgICBsZXQgY2FuZGlkYXRlSW5kZXggPSAwO1xuICAgICAgICAgICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgcmVzcG9uc2UuY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgICAgIGlmICghYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFhZ2dyZWdhdGVkUmVzcG9uc2UuY2FuZGlkYXRlc1tjYW5kaWRhdGVJbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXNbY2FuZGlkYXRlSW5kZXhdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGNhbmRpZGF0ZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBLZWVwIG92ZXJ3cml0aW5nLCB0aGUgbGFzdCBvbmUgd2lsbCBiZSBmaW5hbFxuICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2NhbmRpZGF0ZUluZGV4XS5jaXRhdGlvbk1ldGFkYXRhID1cbiAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlLmNpdGF0aW9uTWV0YWRhdGE7XG4gICAgICAgICAgICAgICAgYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXNbY2FuZGlkYXRlSW5kZXhdLmdyb3VuZGluZ01ldGFkYXRhID1cbiAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlLmdyb3VuZGluZ01ldGFkYXRhO1xuICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2NhbmRpZGF0ZUluZGV4XS5maW5pc2hSZWFzb24gPVxuICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGUuZmluaXNoUmVhc29uO1xuICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2NhbmRpZGF0ZUluZGV4XS5maW5pc2hNZXNzYWdlID1cbiAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlLmZpbmlzaE1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXNbY2FuZGlkYXRlSW5kZXhdLnNhZmV0eVJhdGluZ3MgPVxuICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGUuc2FmZXR5UmF0aW5ncztcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBDYW5kaWRhdGVzIHNob3VsZCBhbHdheXMgaGF2ZSBjb250ZW50IGFuZCBwYXJ0cywgYnV0IHRoaXMgaGFuZGxlc1xuICAgICAgICAgICAgICAgICAqIHBvc3NpYmxlIG1hbGZvcm1lZCByZXNwb25zZXMuXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZS5jb250ZW50ICYmIGNhbmRpZGF0ZS5jb250ZW50LnBhcnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXNbY2FuZGlkYXRlSW5kZXhdLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2NhbmRpZGF0ZUluZGV4XS5jb250ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IGNhbmRpZGF0ZS5jb250ZW50LnJvbGUgfHwgXCJ1c2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQYXJ0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFydCBvZiBjYW5kaWRhdGUuY29udGVudC5wYXJ0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQudGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BhcnQudGV4dCA9IHBhcnQudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LmZ1bmN0aW9uQ2FsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BhcnQuZnVuY3Rpb25DYWxsID0gcGFydC5mdW5jdGlvbkNhbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFydC5leGVjdXRhYmxlQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BhcnQuZXhlY3V0YWJsZUNvZGUgPSBwYXJ0LmV4ZWN1dGFibGVDb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQuY29kZUV4ZWN1dGlvblJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BhcnQuY29kZUV4ZWN1dGlvblJlc3VsdCA9IHBhcnQuY29kZUV4ZWN1dGlvblJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhuZXdQYXJ0KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0LnRleHQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXNbY2FuZGlkYXRlSW5kZXhdLmNvbnRlbnQucGFydHMucHVzaChuZXdQYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbmRpZGF0ZUluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnVzYWdlTWV0YWRhdGEpIHtcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS51c2FnZU1ldGFkYXRhID0gcmVzcG9uc2UudXNhZ2VNZXRhZGF0YTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWdncmVnYXRlZFJlc3BvbnNlO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyNCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50U3RyZWFtKGFwaUtleSwgbW9kZWwsIHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG1ha2VNb2RlbFJlcXVlc3QobW9kZWwsIFRhc2suU1RSRUFNX0dFTkVSQVRFX0NPTlRFTlQsIGFwaUtleSwgXG4gICAgLyogc3RyZWFtICovIHRydWUsIEpTT04uc3RyaW5naWZ5KHBhcmFtcyksIHJlcXVlc3RPcHRpb25zKTtcbiAgICByZXR1cm4gcHJvY2Vzc1N0cmVhbShyZXNwb25zZSk7XG59XG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQoYXBpS2V5LCBtb2RlbCwgcGFyYW1zLCByZXF1ZXN0T3B0aW9ucykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbWFrZU1vZGVsUmVxdWVzdChtb2RlbCwgVGFzay5HRU5FUkFURV9DT05URU5ULCBhcGlLZXksIFxuICAgIC8qIHN0cmVhbSAqLyBmYWxzZSwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBlbmhhbmNlZFJlc3BvbnNlID0gYWRkSGVscGVycyhyZXNwb25zZUpzb24pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3BvbnNlOiBlbmhhbmNlZFJlc3BvbnNlLFxuICAgIH07XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDI0IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5mdW5jdGlvbiBmb3JtYXRTeXN0ZW1JbnN0cnVjdGlvbihpbnB1dCkge1xuICAgIC8vIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgaWYgKGlucHV0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiB7IHJvbGU6IFwic3lzdGVtXCIsIHBhcnRzOiBbeyB0ZXh0OiBpbnB1dCB9XSB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChpbnB1dC50ZXh0KSB7XG4gICAgICAgIHJldHVybiB7IHJvbGU6IFwic3lzdGVtXCIsIHBhcnRzOiBbaW5wdXRdIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGlucHV0LnBhcnRzKSB7XG4gICAgICAgIGlmICghaW5wdXQucm9sZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgcm9sZTogXCJzeXN0ZW1cIiwgcGFydHM6IGlucHV0LnBhcnRzIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBmb3JtYXROZXdDb250ZW50KHJlcXVlc3QpIHtcbiAgICBsZXQgbmV3UGFydHMgPSBbXTtcbiAgICBpZiAodHlwZW9mIHJlcXVlc3QgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbmV3UGFydHMgPSBbeyB0ZXh0OiByZXF1ZXN0IH1dO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0T3JTdHJpbmcgb2YgcmVxdWVzdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJ0T3JTdHJpbmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdQYXJ0cy5wdXNoKHsgdGV4dDogcGFydE9yU3RyaW5nIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3UGFydHMucHVzaChwYXJ0T3JTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhc3NpZ25Sb2xlVG9QYXJ0c0FuZFZhbGlkYXRlU2VuZE1lc3NhZ2VSZXF1ZXN0KG5ld1BhcnRzKTtcbn1cbi8qKlxuICogV2hlbiBtdWx0aXBsZSBQYXJ0IHR5cGVzIChpLmUuIEZ1bmN0aW9uUmVzcG9uc2VQYXJ0IGFuZCBUZXh0UGFydCkgYXJlXG4gKiBwYXNzZWQgaW4gYSBzaW5nbGUgUGFydCBhcnJheSwgd2UgbWF5IG5lZWQgdG8gYXNzaWduIGRpZmZlcmVudCByb2xlcyB0byBlYWNoXG4gKiBwYXJ0LiBDdXJyZW50bHkgb25seSBGdW5jdGlvblJlc3BvbnNlUGFydCByZXF1aXJlcyBhIHJvbGUgb3RoZXIgdGhhbiAndXNlcicuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHBhcnRzIEFycmF5IG9mIHBhcnRzIHRvIHBhc3MgdG8gdGhlIG1vZGVsXG4gKiBAcmV0dXJucyBBcnJheSBvZiBjb250ZW50IGl0ZW1zXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblJvbGVUb1BhcnRzQW5kVmFsaWRhdGVTZW5kTWVzc2FnZVJlcXVlc3QocGFydHMpIHtcbiAgICBjb25zdCB1c2VyQ29udGVudCA9IHsgcm9sZTogXCJ1c2VyXCIsIHBhcnRzOiBbXSB9O1xuICAgIGNvbnN0IGZ1bmN0aW9uQ29udGVudCA9IHsgcm9sZTogXCJmdW5jdGlvblwiLCBwYXJ0czogW10gfTtcbiAgICBsZXQgaGFzVXNlckNvbnRlbnQgPSBmYWxzZTtcbiAgICBsZXQgaGFzRnVuY3Rpb25Db250ZW50ID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBwYXJ0IG9mIHBhcnRzKSB7XG4gICAgICAgIGlmIChcImZ1bmN0aW9uUmVzcG9uc2VcIiBpbiBwYXJ0KSB7XG4gICAgICAgICAgICBmdW5jdGlvbkNvbnRlbnQucGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgIGhhc0Z1bmN0aW9uQ29udGVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1c2VyQ29udGVudC5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgICAgaGFzVXNlckNvbnRlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChoYXNVc2VyQ29udGVudCAmJiBoYXNGdW5jdGlvbkNvbnRlbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yKFwiV2l0aGluIGEgc2luZ2xlIG1lc3NhZ2UsIEZ1bmN0aW9uUmVzcG9uc2UgY2Fubm90IGJlIG1peGVkIHdpdGggb3RoZXIgdHlwZSBvZiBwYXJ0IGluIHRoZSByZXF1ZXN0IGZvciBzZW5kaW5nIGNoYXQgbWVzc2FnZS5cIik7XG4gICAgfVxuICAgIGlmICghaGFzVXNlckNvbnRlbnQgJiYgIWhhc0Z1bmN0aW9uQ29udGVudCkge1xuICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3IoXCJObyBjb250ZW50IGlzIHByb3ZpZGVkIGZvciBzZW5kaW5nIGNoYXQgbWVzc2FnZS5cIik7XG4gICAgfVxuICAgIGlmIChoYXNVc2VyQ29udGVudCkge1xuICAgICAgICByZXR1cm4gdXNlckNvbnRlbnQ7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbkNvbnRlbnQ7XG59XG5mdW5jdGlvbiBmb3JtYXRDb3VudFRva2Vuc0lucHV0KHBhcmFtcywgbW9kZWxQYXJhbXMpIHtcbiAgICB2YXIgX2E7XG4gICAgbGV0IGZvcm1hdHRlZEdlbmVyYXRlQ29udGVudFJlcXVlc3QgPSB7XG4gICAgICAgIG1vZGVsOiBtb2RlbFBhcmFtcyA9PT0gbnVsbCB8fCBtb2RlbFBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWxQYXJhbXMubW9kZWwsXG4gICAgICAgIGdlbmVyYXRpb25Db25maWc6IG1vZGVsUGFyYW1zID09PSBudWxsIHx8IG1vZGVsUGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbFBhcmFtcy5nZW5lcmF0aW9uQ29uZmlnLFxuICAgICAgICBzYWZldHlTZXR0aW5nczogbW9kZWxQYXJhbXMgPT09IG51bGwgfHwgbW9kZWxQYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsUGFyYW1zLnNhZmV0eVNldHRpbmdzLFxuICAgICAgICB0b29sczogbW9kZWxQYXJhbXMgPT09IG51bGwgfHwgbW9kZWxQYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsUGFyYW1zLnRvb2xzLFxuICAgICAgICB0b29sQ29uZmlnOiBtb2RlbFBhcmFtcyA9PT0gbnVsbCB8fCBtb2RlbFBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWxQYXJhbXMudG9vbENvbmZpZyxcbiAgICAgICAgc3lzdGVtSW5zdHJ1Y3Rpb246IG1vZGVsUGFyYW1zID09PSBudWxsIHx8IG1vZGVsUGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbFBhcmFtcy5zeXN0ZW1JbnN0cnVjdGlvbixcbiAgICAgICAgY2FjaGVkQ29udGVudDogKF9hID0gbW9kZWxQYXJhbXMgPT09IG51bGwgfHwgbW9kZWxQYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsUGFyYW1zLmNhY2hlZENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lLFxuICAgICAgICBjb250ZW50czogW10sXG4gICAgfTtcbiAgICBjb25zdCBjb250YWluc0dlbmVyYXRlQ29udGVudFJlcXVlc3QgPSBwYXJhbXMuZ2VuZXJhdGVDb250ZW50UmVxdWVzdCAhPSBudWxsO1xuICAgIGlmIChwYXJhbXMuY29udGVudHMpIHtcbiAgICAgICAgaWYgKGNvbnRhaW5zR2VuZXJhdGVDb250ZW50UmVxdWVzdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSVJlcXVlc3RJbnB1dEVycm9yKFwiQ291bnRUb2tlbnNSZXF1ZXN0IG11c3QgaGF2ZSBvbmUgb2YgY29udGVudHMgb3IgZ2VuZXJhdGVDb250ZW50UmVxdWVzdCwgbm90IGJvdGguXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1hdHRlZEdlbmVyYXRlQ29udGVudFJlcXVlc3QuY29udGVudHMgPSBwYXJhbXMuY29udGVudHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRhaW5zR2VuZXJhdGVDb250ZW50UmVxdWVzdCkge1xuICAgICAgICBmb3JtYXR0ZWRHZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmb3JtYXR0ZWRHZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0KSwgcGFyYW1zLmdlbmVyYXRlQ29udGVudFJlcXVlc3QpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gQXJyYXkgb3Igc3RyaW5nXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmb3JtYXROZXdDb250ZW50KHBhcmFtcyk7XG4gICAgICAgIGZvcm1hdHRlZEdlbmVyYXRlQ29udGVudFJlcXVlc3QuY29udGVudHMgPSBbY29udGVudF07XG4gICAgfVxuICAgIHJldHVybiB7IGdlbmVyYXRlQ29udGVudFJlcXVlc3Q6IGZvcm1hdHRlZEdlbmVyYXRlQ29udGVudFJlcXVlc3QgfTtcbn1cbmZ1bmN0aW9uIGZvcm1hdEdlbmVyYXRlQ29udGVudElucHV0KHBhcmFtcykge1xuICAgIGxldCBmb3JtYXR0ZWRSZXF1ZXN0O1xuICAgIGlmIChwYXJhbXMuY29udGVudHMpIHtcbiAgICAgICAgZm9ybWF0dGVkUmVxdWVzdCA9IHBhcmFtcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIEFycmF5IG9yIHN0cmluZ1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZm9ybWF0TmV3Q29udGVudChwYXJhbXMpO1xuICAgICAgICBmb3JtYXR0ZWRSZXF1ZXN0ID0geyBjb250ZW50czogW2NvbnRlbnRdIH07XG4gICAgfVxuICAgIGlmIChwYXJhbXMuc3lzdGVtSW5zdHJ1Y3Rpb24pIHtcbiAgICAgICAgZm9ybWF0dGVkUmVxdWVzdC5zeXN0ZW1JbnN0cnVjdGlvbiA9IGZvcm1hdFN5c3RlbUluc3RydWN0aW9uKHBhcmFtcy5zeXN0ZW1JbnN0cnVjdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXR0ZWRSZXF1ZXN0O1xufVxuZnVuY3Rpb24gZm9ybWF0RW1iZWRDb250ZW50SW5wdXQocGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheShwYXJhbXMpKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmb3JtYXROZXdDb250ZW50KHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB7IGNvbnRlbnQgfTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8vIGh0dHBzOi8vYWkuZ29vZ2xlLmRldi9hcGkvcmVzdC92MWJldGEvQ29udGVudCNwYXJ0XG5jb25zdCBWQUxJRF9QQVJUX0ZJRUxEUyA9IFtcbiAgICBcInRleHRcIixcbiAgICBcImlubGluZURhdGFcIixcbiAgICBcImZ1bmN0aW9uQ2FsbFwiLFxuICAgIFwiZnVuY3Rpb25SZXNwb25zZVwiLFxuICAgIFwiZXhlY3V0YWJsZUNvZGVcIixcbiAgICBcImNvZGVFeGVjdXRpb25SZXN1bHRcIixcbl07XG5jb25zdCBWQUxJRF9QQVJUU19QRVJfUk9MRSA9IHtcbiAgICB1c2VyOiBbXCJ0ZXh0XCIsIFwiaW5saW5lRGF0YVwiXSxcbiAgICBmdW5jdGlvbjogW1wiZnVuY3Rpb25SZXNwb25zZVwiXSxcbiAgICBtb2RlbDogW1widGV4dFwiLCBcImZ1bmN0aW9uQ2FsbFwiLCBcImV4ZWN1dGFibGVDb2RlXCIsIFwiY29kZUV4ZWN1dGlvblJlc3VsdFwiXSxcbiAgICAvLyBTeXN0ZW0gaW5zdHJ1Y3Rpb25zIHNob3VsZG4ndCBiZSBpbiBoaXN0b3J5IGFueXdheS5cbiAgICBzeXN0ZW06IFtcInRleHRcIl0sXG59O1xuZnVuY3Rpb24gdmFsaWRhdGVDaGF0SGlzdG9yeShoaXN0b3J5KSB7XG4gICAgbGV0IHByZXZDb250ZW50ID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBjdXJyQ29udGVudCBvZiBoaXN0b3J5KSB7XG4gICAgICAgIGNvbnN0IHsgcm9sZSwgcGFydHMgfSA9IGN1cnJDb250ZW50O1xuICAgICAgICBpZiAoIXByZXZDb250ZW50ICYmIHJvbGUgIT09IFwidXNlclwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3IoYEZpcnN0IGNvbnRlbnQgc2hvdWxkIGJlIHdpdGggcm9sZSAndXNlcicsIGdvdCAke3JvbGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFQT1NTSUJMRV9ST0xFUy5pbmNsdWRlcyhyb2xlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yKGBFYWNoIGl0ZW0gc2hvdWxkIGluY2x1ZGUgcm9sZSBmaWVsZC4gR290ICR7cm9sZX0gYnV0IHZhbGlkIHJvbGVzIGFyZTogJHtKU09OLnN0cmluZ2lmeShQT1NTSUJMRV9ST0xFUyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHBhcnRzKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yKFwiQ29udGVudCBzaG91bGQgaGF2ZSAncGFydHMnIHByb3BlcnR5IHdpdGggYW4gYXJyYXkgb2YgUGFydHNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yKFwiRWFjaCBDb250ZW50IHNob3VsZCBoYXZlIGF0IGxlYXN0IG9uZSBwYXJ0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvdW50RmllbGRzID0ge1xuICAgICAgICAgICAgdGV4dDogMCxcbiAgICAgICAgICAgIGlubGluZURhdGE6IDAsXG4gICAgICAgICAgICBmdW5jdGlvbkNhbGw6IDAsXG4gICAgICAgICAgICBmdW5jdGlvblJlc3BvbnNlOiAwLFxuICAgICAgICAgICAgZmlsZURhdGE6IDAsXG4gICAgICAgICAgICBleGVjdXRhYmxlQ29kZTogMCxcbiAgICAgICAgICAgIGNvZGVFeGVjdXRpb25SZXN1bHQ6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgVkFMSURfUEFSVF9GSUVMRFMpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5IGluIHBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRGaWVsZHNba2V5XSArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWxpZFBhcnRzID0gVkFMSURfUEFSVFNfUEVSX1JPTEVbcm9sZV07XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIFZBTElEX1BBUlRfRklFTERTKSB7XG4gICAgICAgICAgICBpZiAoIXZhbGlkUGFydHMuaW5jbHVkZXMoa2V5KSAmJiBjb3VudEZpZWxkc1trZXldID4gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvcihgQ29udGVudCB3aXRoIHJvbGUgJyR7cm9sZX0nIGNhbid0IGNvbnRhaW4gJyR7a2V5fScgcGFydGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHByZXZDb250ZW50ID0gdHJ1ZTtcbiAgICB9XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcmVzcG9uc2UgaXMgdmFsaWQgKGNvdWxkIGJlIGFwcGVuZGVkIHRvIHRoZSBoaXN0b3J5KSwgZmxhc2Ugb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBpc1ZhbGlkUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHJlc3BvbnNlLmNhbmRpZGF0ZXMgPT09IHVuZGVmaW5lZCB8fCByZXNwb25zZS5jYW5kaWRhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRlbnQgPSAoX2EgPSByZXNwb25zZS5jYW5kaWRhdGVzWzBdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29udGVudDtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGNvbnRlbnQucGFydHMgPT09IHVuZGVmaW5lZCB8fCBjb250ZW50LnBhcnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGFydCBvZiBjb250ZW50LnBhcnRzKSB7XG4gICAgICAgIGlmIChwYXJ0ID09PSB1bmRlZmluZWQgfHwgT2JqZWN0LmtleXMocGFydCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnQudGV4dCAhPT0gdW5kZWZpbmVkICYmIHBhcnQudGV4dCA9PT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyNCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBEbyBub3QgbG9nIGEgbWVzc2FnZSBmb3IgdGhpcyBlcnJvci5cbiAqL1xuY29uc3QgU0lMRU5UX0VSUk9SID0gXCJTSUxFTlRfRVJST1JcIjtcbi8qKlxuICogQ2hhdFNlc3Npb24gY2xhc3MgdGhhdCBlbmFibGVzIHNlbmRpbmcgY2hhdCBtZXNzYWdlcyBhbmQgc3RvcmVzXG4gKiBoaXN0b3J5IG9mIHNlbnQgYW5kIHJlY2VpdmVkIG1lc3NhZ2VzIHNvIGZhci5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIENoYXRTZXNzaW9uIHtcbiAgICBjb25zdHJ1Y3RvcihhcGlLZXksIG1vZGVsLCBwYXJhbXMsIF9yZXF1ZXN0T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIHRoaXMuX3JlcXVlc3RPcHRpb25zID0gX3JlcXVlc3RPcHRpb25zO1xuICAgICAgICB0aGlzLl9oaXN0b3J5ID0gW107XG4gICAgICAgIHRoaXMuX3NlbmRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHRoaXMuX2FwaUtleSA9IGFwaUtleTtcbiAgICAgICAgaWYgKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5oaXN0b3J5KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUNoYXRIaXN0b3J5KHBhcmFtcy5oaXN0b3J5KTtcbiAgICAgICAgICAgIHRoaXMuX2hpc3RvcnkgPSBwYXJhbXMuaGlzdG9yeTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjaGF0IGhpc3Rvcnkgc28gZmFyLiBCbG9ja2VkIHByb21wdHMgYXJlIG5vdCBhZGRlZCB0byBoaXN0b3J5LlxuICAgICAqIEJsb2NrZWQgY2FuZGlkYXRlcyBhcmUgbm90IGFkZGVkIHRvIGhpc3RvcnksIG5vciBhcmUgdGhlIHByb21wdHMgdGhhdFxuICAgICAqIGdlbmVyYXRlZCB0aGVtLlxuICAgICAqL1xuICAgIGFzeW5jIGdldEhpc3RvcnkoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRQcm9taXNlO1xuICAgICAgICByZXR1cm4gdGhpcy5faGlzdG9yeTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBjaGF0IG1lc3NhZ2UgYW5kIHJlY2VpdmVzIGEgbm9uLXN0cmVhbWluZ1xuICAgICAqIHtAbGluayBHZW5lcmF0ZUNvbnRlbnRSZXN1bHR9LlxuICAgICAqXG4gICAgICogRmllbGRzIHNldCBpbiB0aGUgb3B0aW9uYWwge0BsaW5rIFNpbmdsZVJlcXVlc3RPcHRpb25zfSBwYXJhbWV0ZXIgd2lsbFxuICAgICAqIHRha2UgcHJlY2VkZW5jZSBvdmVyIHRoZSB7QGxpbmsgUmVxdWVzdE9wdGlvbnN9IHZhbHVlcyBwcm92aWRlZCB0b1xuICAgICAqIHtAbGluayBHb29nbGVHZW5lcmF0aXZlQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsIH0uXG4gICAgICovXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2UocmVxdWVzdCwgcmVxdWVzdE9wdGlvbnMgPSB7fSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICAgICAgYXdhaXQgdGhpcy5fc2VuZFByb21pc2U7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBmb3JtYXROZXdDb250ZW50KHJlcXVlc3QpO1xuICAgICAgICBjb25zdCBnZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgc2FmZXR5U2V0dGluZ3M6IChfYSA9IHRoaXMucGFyYW1zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2FmZXR5U2V0dGluZ3MsXG4gICAgICAgICAgICBnZW5lcmF0aW9uQ29uZmlnOiAoX2IgPSB0aGlzLnBhcmFtcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdlbmVyYXRpb25Db25maWcsXG4gICAgICAgICAgICB0b29sczogKF9jID0gdGhpcy5wYXJhbXMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b29scyxcbiAgICAgICAgICAgIHRvb2xDb25maWc6IChfZCA9IHRoaXMucGFyYW1zKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudG9vbENvbmZpZyxcbiAgICAgICAgICAgIHN5c3RlbUluc3RydWN0aW9uOiAoX2UgPSB0aGlzLnBhcmFtcykgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnN5c3RlbUluc3RydWN0aW9uLFxuICAgICAgICAgICAgY2FjaGVkQ29udGVudDogKF9mID0gdGhpcy5wYXJhbXMpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5jYWNoZWRDb250ZW50LFxuICAgICAgICAgICAgY29udGVudHM6IFsuLi50aGlzLl9oaXN0b3J5LCBuZXdDb250ZW50XSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2hhdFNlc3Npb25SZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fcmVxdWVzdE9wdGlvbnMpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIGxldCBmaW5hbFJlc3VsdDtcbiAgICAgICAgLy8gQWRkIG9udG8gdGhlIGNoYWluLlxuICAgICAgICB0aGlzLl9zZW5kUHJvbWlzZSA9IHRoaXMuX3NlbmRQcm9taXNlXG4gICAgICAgICAgICAudGhlbigoKSA9PiBnZW5lcmF0ZUNvbnRlbnQodGhpcy5fYXBpS2V5LCB0aGlzLm1vZGVsLCBnZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0LCBjaGF0U2Vzc2lvblJlcXVlc3RPcHRpb25zKSlcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkUmVzcG9uc2UocmVzdWx0LnJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hpc3RvcnkucHVzaChuZXdDb250ZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZUNvbnRlbnQgPSBPYmplY3QuYXNzaWduKHsgcGFydHM6IFtdLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzcG9uc2Ugc2VlbXMgdG8gY29tZSBiYWNrIHdpdGhvdXQgYSByb2xlIHNldC5cbiAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJtb2RlbFwiIH0sIChfYSA9IHJlc3VsdC5yZXNwb25zZS5jYW5kaWRhdGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMF0uY29udGVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faGlzdG9yeS5wdXNoKHJlc3BvbnNlQ29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja0Vycm9yTWVzc2FnZSA9IGZvcm1hdEJsb2NrRXJyb3JNZXNzYWdlKHJlc3VsdC5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrRXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2VuZE1lc3NhZ2UoKSB3YXMgdW5zdWNjZXNzZnVsLiAke2Jsb2NrRXJyb3JNZXNzYWdlfS4gSW5zcGVjdCByZXNwb25zZSBvYmplY3QgZm9yIGRldGFpbHMuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIC8vIFJlc2V0cyBfc2VuZFByb21pc2UgdG8gYXZvaWQgc3Vic2VxdWVudCBjYWxscyBmYWlsaW5nIGFuZCB0aHJvdyBlcnJvci5cbiAgICAgICAgICAgIHRoaXMuX3NlbmRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5fc2VuZFByb21pc2U7XG4gICAgICAgIHJldHVybiBmaW5hbFJlc3VsdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBjaGF0IG1lc3NhZ2UgYW5kIHJlY2VpdmVzIHRoZSByZXNwb25zZSBhcyBhXG4gICAgICoge0BsaW5rIEdlbmVyYXRlQ29udGVudFN0cmVhbVJlc3VsdH0gY29udGFpbmluZyBhbiBpdGVyYWJsZSBzdHJlYW1cbiAgICAgKiBhbmQgYSByZXNwb25zZSBwcm9taXNlLlxuICAgICAqXG4gICAgICogRmllbGRzIHNldCBpbiB0aGUgb3B0aW9uYWwge0BsaW5rIFNpbmdsZVJlcXVlc3RPcHRpb25zfSBwYXJhbWV0ZXIgd2lsbFxuICAgICAqIHRha2UgcHJlY2VkZW5jZSBvdmVyIHRoZSB7QGxpbmsgUmVxdWVzdE9wdGlvbnN9IHZhbHVlcyBwcm92aWRlZCB0b1xuICAgICAqIHtAbGluayBHb29nbGVHZW5lcmF0aXZlQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsIH0uXG4gICAgICovXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2VTdHJlYW0ocmVxdWVzdCwgcmVxdWVzdE9wdGlvbnMgPSB7fSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICAgICAgYXdhaXQgdGhpcy5fc2VuZFByb21pc2U7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBmb3JtYXROZXdDb250ZW50KHJlcXVlc3QpO1xuICAgICAgICBjb25zdCBnZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgc2FmZXR5U2V0dGluZ3M6IChfYSA9IHRoaXMucGFyYW1zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2FmZXR5U2V0dGluZ3MsXG4gICAgICAgICAgICBnZW5lcmF0aW9uQ29uZmlnOiAoX2IgPSB0aGlzLnBhcmFtcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdlbmVyYXRpb25Db25maWcsXG4gICAgICAgICAgICB0b29sczogKF9jID0gdGhpcy5wYXJhbXMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b29scyxcbiAgICAgICAgICAgIHRvb2xDb25maWc6IChfZCA9IHRoaXMucGFyYW1zKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudG9vbENvbmZpZyxcbiAgICAgICAgICAgIHN5c3RlbUluc3RydWN0aW9uOiAoX2UgPSB0aGlzLnBhcmFtcykgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnN5c3RlbUluc3RydWN0aW9uLFxuICAgICAgICAgICAgY2FjaGVkQ29udGVudDogKF9mID0gdGhpcy5wYXJhbXMpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5jYWNoZWRDb250ZW50LFxuICAgICAgICAgICAgY29udGVudHM6IFsuLi50aGlzLl9oaXN0b3J5LCBuZXdDb250ZW50XSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2hhdFNlc3Npb25SZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fcmVxdWVzdE9wdGlvbnMpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHN0cmVhbVByb21pc2UgPSBnZW5lcmF0ZUNvbnRlbnRTdHJlYW0odGhpcy5fYXBpS2V5LCB0aGlzLm1vZGVsLCBnZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0LCBjaGF0U2Vzc2lvblJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgLy8gQWRkIG9udG8gdGhlIGNoYWluLlxuICAgICAgICB0aGlzLl9zZW5kUHJvbWlzZSA9IHRoaXMuX3NlbmRQcm9taXNlXG4gICAgICAgICAgICAudGhlbigoKSA9PiBzdHJlYW1Qcm9taXNlKVxuICAgICAgICAgICAgLy8gVGhpcyBtdXN0IGJlIGhhbmRsZWQgdG8gYXZvaWQgdW5oYW5kbGVkIHJlamVjdGlvbiwgYnV0IGp1bXBcbiAgICAgICAgICAgIC8vIHRvIHRoZSBmaW5hbCBjYXRjaCBibG9jayB3aXRoIGEgbGFiZWwgdG8gbm90IGxvZyB0aGlzIGVycm9yLlxuICAgICAgICAgICAgLmNhdGNoKChfaWdub3JlZCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFNJTEVOVF9FUlJPUik7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoc3RyZWFtUmVzdWx0KSA9PiBzdHJlYW1SZXN1bHQucmVzcG9uc2UpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkUmVzcG9uc2UocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGlzdG9yeS5wdXNoKG5ld0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQ29udGVudCA9IE9iamVjdC5hc3NpZ24oe30sIHJlc3BvbnNlLmNhbmRpZGF0ZXNbMF0uY29udGVudCk7XG4gICAgICAgICAgICAgICAgLy8gUmVzcG9uc2Ugc2VlbXMgdG8gY29tZSBiYWNrIHdpdGhvdXQgYSByb2xlIHNldC5cbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlQ29udGVudC5yb2xlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlQ29udGVudC5yb2xlID0gXCJtb2RlbFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9oaXN0b3J5LnB1c2gocmVzcG9uc2VDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrRXJyb3JNZXNzYWdlID0gZm9ybWF0QmxvY2tFcnJvck1lc3NhZ2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGlmIChibG9ja0Vycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYHNlbmRNZXNzYWdlU3RyZWFtKCkgd2FzIHVuc3VjY2Vzc2Z1bC4gJHtibG9ja0Vycm9yTWVzc2FnZX0uIEluc3BlY3QgcmVzcG9uc2Ugb2JqZWN0IGZvciBkZXRhaWxzLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgLy8gRXJyb3JzIGluIHN0cmVhbVByb21pc2UgYXJlIGFscmVhZHkgY2F0Y2hhYmxlIGJ5IHRoZSB1c2VyIGFzXG4gICAgICAgICAgICAvLyBzdHJlYW1Qcm9taXNlIGlzIHJldHVybmVkLlxuICAgICAgICAgICAgLy8gQXZvaWQgZHVwbGljYXRpbmcgdGhlIGVycm9yIG1lc3NhZ2UgaW4gbG9ncy5cbiAgICAgICAgICAgIGlmIChlLm1lc3NhZ2UgIT09IFNJTEVOVF9FUlJPUikge1xuICAgICAgICAgICAgICAgIC8vIFVzZXJzIGRvIG5vdCBoYXZlIGFjY2VzcyB0byBfc2VuZFByb21pc2UgdG8gY2F0Y2ggZXJyb3JzXG4gICAgICAgICAgICAgICAgLy8gZG93bnN0cmVhbSBmcm9tIHN0cmVhbVByb21pc2UsIHNvIHRoZXkgc2hvdWxkIG5vdCB0aHJvdy5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbVByb21pc2U7XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyNCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY291bnRUb2tlbnMoYXBpS2V5LCBtb2RlbCwgcGFyYW1zLCBzaW5nbGVSZXF1ZXN0T3B0aW9ucykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbWFrZU1vZGVsUmVxdWVzdChtb2RlbCwgVGFzay5DT1VOVF9UT0tFTlMsIGFwaUtleSwgZmFsc2UsIEpTT04uc3RyaW5naWZ5KHBhcmFtcyksIHNpbmdsZVJlcXVlc3RPcHRpb25zKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyNCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZW1iZWRDb250ZW50KGFwaUtleSwgbW9kZWwsIHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG1ha2VNb2RlbFJlcXVlc3QobW9kZWwsIFRhc2suRU1CRURfQ09OVEVOVCwgYXBpS2V5LCBmYWxzZSwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5hc3luYyBmdW5jdGlvbiBiYXRjaEVtYmVkQ29udGVudHMoYXBpS2V5LCBtb2RlbCwgcGFyYW1zLCByZXF1ZXN0T3B0aW9ucykge1xuICAgIGNvbnN0IHJlcXVlc3RzV2l0aE1vZGVsID0gcGFyYW1zLnJlcXVlc3RzLm1hcCgocmVxdWVzdCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXF1ZXN0KSwgeyBtb2RlbCB9KTtcbiAgICB9KTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG1ha2VNb2RlbFJlcXVlc3QobW9kZWwsIFRhc2suQkFUQ0hfRU1CRURfQ09OVEVOVFMsIGFwaUtleSwgZmFsc2UsIEpTT04uc3RyaW5naWZ5KHsgcmVxdWVzdHM6IHJlcXVlc3RzV2l0aE1vZGVsIH0pLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQ2xhc3MgZm9yIGdlbmVyYXRpdmUgbW9kZWwgQVBJcy5cbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgR2VuZXJhdGl2ZU1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihhcGlLZXksIG1vZGVsUGFyYW1zLCBfcmVxdWVzdE9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLmFwaUtleSA9IGFwaUtleTtcbiAgICAgICAgdGhpcy5fcmVxdWVzdE9wdGlvbnMgPSBfcmVxdWVzdE9wdGlvbnM7XG4gICAgICAgIGlmIChtb2RlbFBhcmFtcy5tb2RlbC5pbmNsdWRlcyhcIi9cIikpIHtcbiAgICAgICAgICAgIC8vIE1vZGVscyBtYXkgYmUgbmFtZWQgXCJtb2RlbHMvbW9kZWwtbmFtZVwiIG9yIFwidHVuZWRNb2RlbHMvbW9kZWwtbmFtZVwiXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWxQYXJhbXMubW9kZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBwYXRoIGlzIG5vdCBpbmNsdWRlZCwgYXNzdW1lIGl0J3MgYSBub24tdHVuZWQgbW9kZWwuXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gYG1vZGVscy8ke21vZGVsUGFyYW1zLm1vZGVsfWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZW5lcmF0aW9uQ29uZmlnID0gbW9kZWxQYXJhbXMuZ2VuZXJhdGlvbkNvbmZpZyB8fCB7fTtcbiAgICAgICAgdGhpcy5zYWZldHlTZXR0aW5ncyA9IG1vZGVsUGFyYW1zLnNhZmV0eVNldHRpbmdzIHx8IFtdO1xuICAgICAgICB0aGlzLnRvb2xzID0gbW9kZWxQYXJhbXMudG9vbHM7XG4gICAgICAgIHRoaXMudG9vbENvbmZpZyA9IG1vZGVsUGFyYW1zLnRvb2xDb25maWc7XG4gICAgICAgIHRoaXMuc3lzdGVtSW5zdHJ1Y3Rpb24gPSBmb3JtYXRTeXN0ZW1JbnN0cnVjdGlvbihtb2RlbFBhcmFtcy5zeXN0ZW1JbnN0cnVjdGlvbik7XG4gICAgICAgIHRoaXMuY2FjaGVkQ29udGVudCA9IG1vZGVsUGFyYW1zLmNhY2hlZENvbnRlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1ha2VzIGEgc2luZ2xlIG5vbi1zdHJlYW1pbmcgY2FsbCB0byB0aGUgbW9kZWxcbiAgICAgKiBhbmQgcmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBhIHNpbmdsZSB7QGxpbmsgR2VuZXJhdGVDb250ZW50UmVzcG9uc2V9LlxuICAgICAqXG4gICAgICogRmllbGRzIHNldCBpbiB0aGUgb3B0aW9uYWwge0BsaW5rIFNpbmdsZVJlcXVlc3RPcHRpb25zfSBwYXJhbWV0ZXIgd2lsbFxuICAgICAqIHRha2UgcHJlY2VkZW5jZSBvdmVyIHRoZSB7QGxpbmsgUmVxdWVzdE9wdGlvbnN9IHZhbHVlcyBwcm92aWRlZCB0b1xuICAgICAqIHtAbGluayBHb29nbGVHZW5lcmF0aXZlQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsIH0uXG4gICAgICovXG4gICAgYXN5bmMgZ2VuZXJhdGVDb250ZW50KHJlcXVlc3QsIHJlcXVlc3RPcHRpb25zID0ge30pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRQYXJhbXMgPSBmb3JtYXRHZW5lcmF0ZUNvbnRlbnRJbnB1dChyZXF1ZXN0KTtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGl2ZU1vZGVsUmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3JlcXVlc3RPcHRpb25zKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gZ2VuZXJhdGVDb250ZW50KHRoaXMuYXBpS2V5LCB0aGlzLm1vZGVsLCBPYmplY3QuYXNzaWduKHsgZ2VuZXJhdGlvbkNvbmZpZzogdGhpcy5nZW5lcmF0aW9uQ29uZmlnLCBzYWZldHlTZXR0aW5nczogdGhpcy5zYWZldHlTZXR0aW5ncywgdG9vbHM6IHRoaXMudG9vbHMsIHRvb2xDb25maWc6IHRoaXMudG9vbENvbmZpZywgc3lzdGVtSW5zdHJ1Y3Rpb246IHRoaXMuc3lzdGVtSW5zdHJ1Y3Rpb24sIGNhY2hlZENvbnRlbnQ6IChfYSA9IHRoaXMuY2FjaGVkQ29udGVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWUgfSwgZm9ybWF0dGVkUGFyYW1zKSwgZ2VuZXJhdGl2ZU1vZGVsUmVxdWVzdE9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYWtlcyBhIHNpbmdsZSBzdHJlYW1pbmcgY2FsbCB0byB0aGUgbW9kZWwgYW5kIHJldHVybnMgYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyBhbiBpdGVyYWJsZSBzdHJlYW0gdGhhdCBpdGVyYXRlcyBvdmVyIGFsbCBjaHVua3MgaW4gdGhlXG4gICAgICogc3RyZWFtaW5nIHJlc3BvbnNlIGFzIHdlbGwgYXMgYSBwcm9taXNlIHRoYXQgcmV0dXJucyB0aGUgZmluYWxcbiAgICAgKiBhZ2dyZWdhdGVkIHJlc3BvbnNlLlxuICAgICAqXG4gICAgICogRmllbGRzIHNldCBpbiB0aGUgb3B0aW9uYWwge0BsaW5rIFNpbmdsZVJlcXVlc3RPcHRpb25zfSBwYXJhbWV0ZXIgd2lsbFxuICAgICAqIHRha2UgcHJlY2VkZW5jZSBvdmVyIHRoZSB7QGxpbmsgUmVxdWVzdE9wdGlvbnN9IHZhbHVlcyBwcm92aWRlZCB0b1xuICAgICAqIHtAbGluayBHb29nbGVHZW5lcmF0aXZlQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsIH0uXG4gICAgICovXG4gICAgYXN5bmMgZ2VuZXJhdGVDb250ZW50U3RyZWFtKHJlcXVlc3QsIHJlcXVlc3RPcHRpb25zID0ge30pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRQYXJhbXMgPSBmb3JtYXRHZW5lcmF0ZUNvbnRlbnRJbnB1dChyZXF1ZXN0KTtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGl2ZU1vZGVsUmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3JlcXVlc3RPcHRpb25zKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gZ2VuZXJhdGVDb250ZW50U3RyZWFtKHRoaXMuYXBpS2V5LCB0aGlzLm1vZGVsLCBPYmplY3QuYXNzaWduKHsgZ2VuZXJhdGlvbkNvbmZpZzogdGhpcy5nZW5lcmF0aW9uQ29uZmlnLCBzYWZldHlTZXR0aW5nczogdGhpcy5zYWZldHlTZXR0aW5ncywgdG9vbHM6IHRoaXMudG9vbHMsIHRvb2xDb25maWc6IHRoaXMudG9vbENvbmZpZywgc3lzdGVtSW5zdHJ1Y3Rpb246IHRoaXMuc3lzdGVtSW5zdHJ1Y3Rpb24sIGNhY2hlZENvbnRlbnQ6IChfYSA9IHRoaXMuY2FjaGVkQ29udGVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWUgfSwgZm9ybWF0dGVkUGFyYW1zKSwgZ2VuZXJhdGl2ZU1vZGVsUmVxdWVzdE9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgbmV3IHtAbGluayBDaGF0U2Vzc2lvbn0gaW5zdGFuY2Ugd2hpY2ggY2FuIGJlIHVzZWQgZm9yXG4gICAgICogbXVsdGktdHVybiBjaGF0cy5cbiAgICAgKi9cbiAgICBzdGFydENoYXQoc3RhcnRDaGF0UGFyYW1zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIG5ldyBDaGF0U2Vzc2lvbih0aGlzLmFwaUtleSwgdGhpcy5tb2RlbCwgT2JqZWN0LmFzc2lnbih7IGdlbmVyYXRpb25Db25maWc6IHRoaXMuZ2VuZXJhdGlvbkNvbmZpZywgc2FmZXR5U2V0dGluZ3M6IHRoaXMuc2FmZXR5U2V0dGluZ3MsIHRvb2xzOiB0aGlzLnRvb2xzLCB0b29sQ29uZmlnOiB0aGlzLnRvb2xDb25maWcsIHN5c3RlbUluc3RydWN0aW9uOiB0aGlzLnN5c3RlbUluc3RydWN0aW9uLCBjYWNoZWRDb250ZW50OiAoX2EgPSB0aGlzLmNhY2hlZENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lIH0sIHN0YXJ0Q2hhdFBhcmFtcyksIHRoaXMuX3JlcXVlc3RPcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ291bnRzIHRoZSB0b2tlbnMgaW4gdGhlIHByb3ZpZGVkIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBGaWVsZHMgc2V0IGluIHRoZSBvcHRpb25hbCB7QGxpbmsgU2luZ2xlUmVxdWVzdE9wdGlvbnN9IHBhcmFtZXRlciB3aWxsXG4gICAgICogdGFrZSBwcmVjZWRlbmNlIG92ZXIgdGhlIHtAbGluayBSZXF1ZXN0T3B0aW9uc30gdmFsdWVzIHByb3ZpZGVkIHRvXG4gICAgICoge0BsaW5rIEdvb2dsZUdlbmVyYXRpdmVBSS5nZXRHZW5lcmF0aXZlTW9kZWwgfS5cbiAgICAgKi9cbiAgICBhc3luYyBjb3VudFRva2VucyhyZXF1ZXN0LCByZXF1ZXN0T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFBhcmFtcyA9IGZvcm1hdENvdW50VG9rZW5zSW5wdXQocmVxdWVzdCwge1xuICAgICAgICAgICAgbW9kZWw6IHRoaXMubW9kZWwsXG4gICAgICAgICAgICBnZW5lcmF0aW9uQ29uZmlnOiB0aGlzLmdlbmVyYXRpb25Db25maWcsXG4gICAgICAgICAgICBzYWZldHlTZXR0aW5nczogdGhpcy5zYWZldHlTZXR0aW5ncyxcbiAgICAgICAgICAgIHRvb2xzOiB0aGlzLnRvb2xzLFxuICAgICAgICAgICAgdG9vbENvbmZpZzogdGhpcy50b29sQ29uZmlnLFxuICAgICAgICAgICAgc3lzdGVtSW5zdHJ1Y3Rpb246IHRoaXMuc3lzdGVtSW5zdHJ1Y3Rpb24sXG4gICAgICAgICAgICBjYWNoZWRDb250ZW50OiB0aGlzLmNhY2hlZENvbnRlbnQsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBnZW5lcmF0aXZlTW9kZWxSZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fcmVxdWVzdE9wdGlvbnMpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBjb3VudFRva2Vucyh0aGlzLmFwaUtleSwgdGhpcy5tb2RlbCwgZm9ybWF0dGVkUGFyYW1zLCBnZW5lcmF0aXZlTW9kZWxSZXF1ZXN0T3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtYmVkcyB0aGUgcHJvdmlkZWQgY29udGVudC5cbiAgICAgKlxuICAgICAqIEZpZWxkcyBzZXQgaW4gdGhlIG9wdGlvbmFsIHtAbGluayBTaW5nbGVSZXF1ZXN0T3B0aW9uc30gcGFyYW1ldGVyIHdpbGxcbiAgICAgKiB0YWtlIHByZWNlZGVuY2Ugb3ZlciB0aGUge0BsaW5rIFJlcXVlc3RPcHRpb25zfSB2YWx1ZXMgcHJvdmlkZWQgdG9cbiAgICAgKiB7QGxpbmsgR29vZ2xlR2VuZXJhdGl2ZUFJLmdldEdlbmVyYXRpdmVNb2RlbCB9LlxuICAgICAqL1xuICAgIGFzeW5jIGVtYmVkQ29udGVudChyZXF1ZXN0LCByZXF1ZXN0T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFBhcmFtcyA9IGZvcm1hdEVtYmVkQ29udGVudElucHV0KHJlcXVlc3QpO1xuICAgICAgICBjb25zdCBnZW5lcmF0aXZlTW9kZWxSZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fcmVxdWVzdE9wdGlvbnMpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBlbWJlZENvbnRlbnQodGhpcy5hcGlLZXksIHRoaXMubW9kZWwsIGZvcm1hdHRlZFBhcmFtcywgZ2VuZXJhdGl2ZU1vZGVsUmVxdWVzdE9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWJlZHMgYW4gYXJyYXkgb2Yge0BsaW5rIEVtYmVkQ29udGVudFJlcXVlc3R9cy5cbiAgICAgKlxuICAgICAqIEZpZWxkcyBzZXQgaW4gdGhlIG9wdGlvbmFsIHtAbGluayBTaW5nbGVSZXF1ZXN0T3B0aW9uc30gcGFyYW1ldGVyIHdpbGxcbiAgICAgKiB0YWtlIHByZWNlZGVuY2Ugb3ZlciB0aGUge0BsaW5rIFJlcXVlc3RPcHRpb25zfSB2YWx1ZXMgcHJvdmlkZWQgdG9cbiAgICAgKiB7QGxpbmsgR29vZ2xlR2VuZXJhdGl2ZUFJLmdldEdlbmVyYXRpdmVNb2RlbCB9LlxuICAgICAqL1xuICAgIGFzeW5jIGJhdGNoRW1iZWRDb250ZW50cyhiYXRjaEVtYmVkQ29udGVudFJlcXVlc3QsIHJlcXVlc3RPcHRpb25zID0ge30pIHtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGl2ZU1vZGVsUmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3JlcXVlc3RPcHRpb25zKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gYmF0Y2hFbWJlZENvbnRlbnRzKHRoaXMuYXBpS2V5LCB0aGlzLm1vZGVsLCBiYXRjaEVtYmVkQ29udGVudFJlcXVlc3QsIGdlbmVyYXRpdmVNb2RlbFJlcXVlc3RPcHRpb25zKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDI0IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIFRvcC1sZXZlbCBjbGFzcyBmb3IgdGhpcyBTREtcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgR29vZ2xlR2VuZXJhdGl2ZUFJIHtcbiAgICBjb25zdHJ1Y3RvcihhcGlLZXkpIHtcbiAgICAgICAgdGhpcy5hcGlLZXkgPSBhcGlLZXk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgYSB7QGxpbmsgR2VuZXJhdGl2ZU1vZGVsfSBpbnN0YW5jZSBmb3IgdGhlIHByb3ZpZGVkIG1vZGVsIG5hbWUuXG4gICAgICovXG4gICAgZ2V0R2VuZXJhdGl2ZU1vZGVsKG1vZGVsUGFyYW1zLCByZXF1ZXN0T3B0aW9ucykge1xuICAgICAgICBpZiAoIW1vZGVsUGFyYW1zLm1vZGVsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3IoYE11c3QgcHJvdmlkZSBhIG1vZGVsIG5hbWUuIGAgK1xuICAgICAgICAgICAgICAgIGBFeGFtcGxlOiBnZW5haS5nZXRHZW5lcmF0aXZlTW9kZWwoeyBtb2RlbDogJ215LW1vZGVsLW5hbWUnIH0pYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBHZW5lcmF0aXZlTW9kZWwodGhpcy5hcGlLZXksIG1vZGVsUGFyYW1zLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB7QGxpbmsgR2VuZXJhdGl2ZU1vZGVsfSBpbnN0YW5jZSBmcm9tIHByb3ZpZGVkIGNvbnRlbnQgY2FjaGUuXG4gICAgICovXG4gICAgZ2V0R2VuZXJhdGl2ZU1vZGVsRnJvbUNhY2hlZENvbnRlbnQoY2FjaGVkQ29udGVudCwgbW9kZWxQYXJhbXMsIHJlcXVlc3RPcHRpb25zKSB7XG4gICAgICAgIGlmICghY2FjaGVkQ29udGVudC5uYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJUmVxdWVzdElucHV0RXJyb3IoXCJDYWNoZWQgY29udGVudCBtdXN0IGNvbnRhaW4gYSBgbmFtZWAgZmllbGQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2FjaGVkQ29udGVudC5tb2RlbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSVJlcXVlc3RJbnB1dEVycm9yKFwiQ2FjaGVkIGNvbnRlbnQgbXVzdCBjb250YWluIGEgYG1vZGVsYCBmaWVsZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5vdCBjaGVja2luZyB0b29scyBhbmQgdG9vbENvbmZpZyBmb3Igbm93IGFzIGl0IHdvdWxkIHJlcXVpcmUgYSBkZWVwXG4gICAgICAgICAqIGVxdWFsaXR5IGNvbXBhcmlzb24gYW5kIGlzbid0IGxpa2VseSB0byBiZSBhIGNvbW1vbiBjYXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZGlzYWxsb3dlZER1cGxpY2F0ZXMgPSBbXCJtb2RlbFwiLCBcInN5c3RlbUluc3RydWN0aW9uXCJdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBkaXNhbGxvd2VkRHVwbGljYXRlcykge1xuICAgICAgICAgICAgaWYgKChtb2RlbFBhcmFtcyA9PT0gbnVsbCB8fCBtb2RlbFBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWxQYXJhbXNba2V5XSkgJiZcbiAgICAgICAgICAgICAgICBjYWNoZWRDb250ZW50W2tleV0gJiZcbiAgICAgICAgICAgICAgICAobW9kZWxQYXJhbXMgPT09IG51bGwgfHwgbW9kZWxQYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsUGFyYW1zW2tleV0pICE9PSBjYWNoZWRDb250ZW50W2tleV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcIm1vZGVsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZWxQYXJhbXNDb21wID0gbW9kZWxQYXJhbXMubW9kZWwuc3RhcnRzV2l0aChcIm1vZGVscy9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbW9kZWxQYXJhbXMubW9kZWwucmVwbGFjZShcIm1vZGVscy9cIiwgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbW9kZWxQYXJhbXMubW9kZWw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZENvbnRlbnRDb21wID0gY2FjaGVkQ29udGVudC5tb2RlbC5zdGFydHNXaXRoKFwibW9kZWxzL1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjYWNoZWRDb250ZW50Lm1vZGVsLnJlcGxhY2UoXCJtb2RlbHMvXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNhY2hlZENvbnRlbnQubW9kZWw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbFBhcmFtc0NvbXAgPT09IGNhY2hlZENvbnRlbnRDb21wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJUmVxdWVzdElucHV0RXJyb3IoYERpZmZlcmVudCB2YWx1ZSBmb3IgXCIke2tleX1cIiBzcGVjaWZpZWQgaW4gbW9kZWxQYXJhbXNgICtcbiAgICAgICAgICAgICAgICAgICAgYCAoJHttb2RlbFBhcmFtc1trZXldfSkgYW5kIGNhY2hlZENvbnRlbnQgKCR7Y2FjaGVkQ29udGVudFtrZXldfSlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbFBhcmFtc0Zyb21DYWNoZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbW9kZWxQYXJhbXMpLCB7IG1vZGVsOiBjYWNoZWRDb250ZW50Lm1vZGVsLCB0b29sczogY2FjaGVkQ29udGVudC50b29scywgdG9vbENvbmZpZzogY2FjaGVkQ29udGVudC50b29sQ29uZmlnLCBzeXN0ZW1JbnN0cnVjdGlvbjogY2FjaGVkQ29udGVudC5zeXN0ZW1JbnN0cnVjdGlvbiwgY2FjaGVkQ29udGVudCB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBHZW5lcmF0aXZlTW9kZWwodGhpcy5hcGlLZXksIG1vZGVsUGFyYW1zRnJvbUNhY2hlLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBCbG9ja1JlYXNvbiwgQ2hhdFNlc3Npb24sIER5bmFtaWNSZXRyaWV2YWxNb2RlLCBFeGVjdXRhYmxlQ29kZUxhbmd1YWdlLCBGaW5pc2hSZWFzb24sIEZ1bmN0aW9uQ2FsbGluZ01vZGUsIEdlbmVyYXRpdmVNb2RlbCwgR29vZ2xlR2VuZXJhdGl2ZUFJLCBHb29nbGVHZW5lcmF0aXZlQUlBYm9ydEVycm9yLCBHb29nbGVHZW5lcmF0aXZlQUlFcnJvciwgR29vZ2xlR2VuZXJhdGl2ZUFJRmV0Y2hFcnJvciwgR29vZ2xlR2VuZXJhdGl2ZUFJUmVxdWVzdElucHV0RXJyb3IsIEdvb2dsZUdlbmVyYXRpdmVBSVJlc3BvbnNlRXJyb3IsIEhhcm1CbG9ja1RocmVzaG9sZCwgSGFybUNhdGVnb3J5LCBIYXJtUHJvYmFiaWxpdHksIE91dGNvbWUsIFBPU1NJQkxFX1JPTEVTLCBTY2hlbWFUeXBlLCBUYXNrVHlwZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBAZ29vZ2xlL2dlbmVyYXRpdmUtYWkg44Op44Kk44OW44Op44Oq44KS44Kk44Oz44Od44O844OIXHJcbmltcG9ydCB7XHJcbiAgR29vZ2xlR2VuZXJhdGl2ZUFJLFxyXG4gIEhhcm1DYXRlZ29yeSxcclxuICBIYXJtQmxvY2tUaHJlc2hvbGQsXHJcbn0gZnJvbSBcIkBnb29nbGUvZ2VuZXJhdGl2ZS1haVwiO1xyXG5cclxuLy8gLS0tIOODh+ODkOODg+OCsOeUqOOBruips+e0sOODreOCsOioreWumiAtLS1cclxuLy8g6Kmz57Sw44Gq44Ot44Kw44KS6KaL44KL5b+F6KaB44GM44Gq44GP44Gq44Gj44Gf44KJ44CB5Lul5LiL44Gu44OV44Op44Kw44KSIGZhbHNlIOOBq+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG5jb25zdCBERVRBSUxFRF9MT0dHSU5HX0VOQUJMRUQgPSB0cnVlO1xyXG5cclxuZnVuY3Rpb24gZGV0YWlsZWRMb2coLi4uYXJncykge1xyXG4gIGlmIChERVRBSUxFRF9MT0dHSU5HX0VOQUJMRUQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwi44OQ44OD44Kv44Kw44Op44Km44Oz44OJOlwiLCAuLi5hcmdzKTtcclxuICB9XHJcbn1cclxuXHJcbmRldGFpbGVkTG9nKFwiU2VydmljZSBXb3JrZXIg6LW35YuVICjjgb7jgZ/jga/lho3otbfli5UpXCIpO1xyXG5cclxuLy8gLS0tIOODoeOCpOODs+OBruODoeODg+OCu+ODvOOCuOODquOCueODiuODvCAo44Kz44Oz44OG44Oz44OE44K544Kv44Oq44OX44OI44GL44KJ44Gu44Oq44Kv44Ko44K544OI44KS5Yem55CGKSAtLS1cclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gIGRldGFpbGVkTG9nKFwiJ29uTWVzc2FnZScg44Oq44K544OK44O85Y+X5L+hOlwiLCByZXF1ZXN0KTtcclxuXHJcbiAgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcInRyYW5zbGF0ZVwiKSB7XHJcbiAgICBkZXRhaWxlZExvZyhcIid0cmFuc2xhdGUnIOOCouOCr+OCt+ODp+ODs+WHpueQhumWi+Wni1wiKTtcclxuICAgIGhhbmRsZVRyYW5zbGF0ZVJlcXVlc3QocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgcmV0dXJuIHRydWU7IC8vIOmdnuWQjOacn+WHpueQhuOBruOBn+OCgSB0cnVlIOOCkui/lOOBmVxyXG4gIH1cclxuICAvLyDku5bjga7jg6Hjg4Pjgrvjg7zjgrjjgr/jgqTjg5fjgYzjgYLjgozjgbDjgZPjgZPjgavov73liqBcclxuICByZXR1cm4gZmFsc2U7IC8vIOOBk+OBruODquOCueODiuODvOOBjOOBk+OCjOS7peS4iuODoeODg+OCu+ODvOOCuOOCkuWHpueQhuOBl+OBquOBhOOBk+OBqOOCkuekuuOBmVxyXG59KTtcclxuXHJcbi8vIC0tLSDjgrfjg6fjg7zjg4jjgqvjg4Pjg4jjgq3jg7zjgrPjg57jg7Pjg4njga7jg6rjgrnjg4rjg7wgLS0tXHJcbmNocm9tZS5jb21tYW5kcy5vbkNvbW1hbmQuYWRkTGlzdGVuZXIoYXN5bmMgKGNvbW1hbmQsIHRhYikgPT4ge1xyXG4gIGRldGFpbGVkTG9nKGDjgrPjg57jg7Pjg4njgIwke2NvbW1hbmR944CN5Y+X5L+hICjjgr/jg5ZJRDogJHt0YWIgPyB0YWIuaWQgOiBcIk4vQVwifSlgKTtcclxuXHJcbiAgLy8gbWFuaWZlc3QuanNvbiDjgaflrprnvqnjgZfjgZ/jgrPjg57jg7Pjg4nlkI3jgajkuIDoh7TjgZXjgZvjgotcclxuICBpZiAoY29tbWFuZCA9PT0gXCJ0cmFuc2xhdGVfc2VsZWN0aW9uXCIpIHtcclxuICAgIC8vIOKGkCBtYW5pZmVzdC5qc29uIOOBp+Wumue+qeOBl+OBn+OCs+ODnuODs+ODieWQjVxyXG4gICAgaWYgKHRhYiAmJiB0YWIuaWQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdG9yYWdlSXRlbXMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1xyXG4gICAgICAgICAgXCJkZWZhdWx0VGFyZ2V0TGFuZ3VhZ2VcIixcclxuICAgICAgICBdKTtcclxuICAgICAgICBjb25zdCB0YXJnZXRMYW5nID0gc3RvcmFnZUl0ZW1zLmRlZmF1bHRUYXJnZXRMYW5ndWFnZSB8fCBcImphXCI7IC8vIOODh+ODleOCqeODq+ODiOOBr+aXpeacrOiqnlxyXG5cclxuICAgICAgICBkZXRhaWxlZExvZyhcclxuICAgICAgICAgIGDjgrPjg7Pjg4bjg7Pjg4Tjgrnjgq/jg6rjg5fjg4ggKCR7dGFiLmlkfSkg44GrIGdldFNlbGVjdGlvbkFuZFRyYW5zbGF0ZSDjgpLpgIHkv6EgKOOCs+ODnuODs+ODiee1jOeUsSnjgIIgdGFyZ2V0TGFuZzogJHt0YXJnZXRMYW5nfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRnJvbUNvbnRlbnRTY3JpcHQgPSBhd2FpdCBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShcclxuICAgICAgICAgIHRhYi5pZCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYWN0aW9uOiBcImdldFNlbGVjdGlvbkFuZFRyYW5zbGF0ZVwiLCAvLyBjb250ZW50LmpzIOOBjOOBk+OBruOCouOCr+OCt+ODp+ODs+OCkuODquODg+OCueODs+OBmeOCi1xyXG4gICAgICAgICAgICB0YXJnZXRMYW5nOiB0YXJnZXRMYW5nLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGV0YWlsZWRMb2coXHJcbiAgICAgICAgICBcIuOCs+ODs+ODhuODs+ODhOOCueOCr+ODquODl+ODiOOBi+OCieOBruW/nOetlCAo44Kz44Oe44Oz44OJ57WM55SxKTpcIixcclxuICAgICAgICAgIHJlc3BvbnNlRnJvbUNvbnRlbnRTY3JpcHRcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIOOCs+ODs+ODhuODs+ODhOOCueOCr+ODquODl+ODiOOBi+OCieOBruW/nOetlOOBq+WfuuOBpeOBhOOBpuS9leOBi+WHpueQhuOCkuOBmeOCi+WgtOWQiOOBr+OBk+OBk1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICBg44Kz44Oz44OG44Oz44OE44K544Kv44Oq44OX44OIICgke3RhYi5pZH0pIOOBuOOBruODoeODg+OCu+ODvOOCuOmAgeS/oeWkseaVlyAo44Kz44Oe44Oz44OJ57WM55SxKTpgLFxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGVycm9yLm1lc3NhZ2UgJiZcclxuICAgICAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJSZWNlaXZpbmcgZW5kIGRvZXMgbm90IGV4aXN0XCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgIFwi54++5Zyo44Gu44K/44OW44Gn44Gv44Kz44Oz44OG44Oz44OE44K544Kv44Oq44OX44OI44GM5a6f6KGM44GV44KM44Gm44GE44Gq44GE44GL44CB5b+c562U44GM44GC44KK44G+44Gb44KT44CC44Oa44O844K444KS44Oq44Ot44O844OJ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAvLyDlv4XopoHjgafjgYLjgozjgbAgY2hyb21lLm5vdGlmaWNhdGlvbnMgQVBJIOOBquOBqeOBp+ODpuODvOOCtuODvOOBq+mAmuefpVxyXG4gICAgICAgICAgLy8gY2hyb21lLm5vdGlmaWNhdGlvbnMuY3JlYXRlKHtcclxuICAgICAgICAgIC8vICAgdHlwZTogJ2Jhc2ljJyxcclxuICAgICAgICAgIC8vICAgaWNvblVybDogJ2ljb25zL2ljb240OC5wbmcnLFxyXG4gICAgICAgICAgLy8gICB0aXRsZTogJ+e/u+ios+OCqOODqeODvCcsXHJcbiAgICAgICAgICAvLyAgIG1lc3NhZ2U6ICfnj77lnKjjga7jg5rjg7zjgrjjgafjga/nv7voqLPjgpLlrp/ooYzjgafjgY3jgb7jgZvjgpPjgafjgZfjgZ/jgILjg5rjg7zjgrjjgpLjg6rjg63jg7zjg4njgZfjgabjgYroqabjgZfjgY/jgaDjgZXjgYTjgIInXHJcbiAgICAgICAgICAvLyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLjgqLjgq/jg4bjgqPjg5bjgarjgr/jg5bmg4XloLHjgYzlj5blvpfjgafjgY3jgb7jgZvjgpPjgafjgZfjgZ/vvIjjgrPjg57jg7Pjg4nvvInjgIJcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIC0tLSDnv7voqLPjg6rjgq/jgqjjgrnjg4jlh6bnkIbplqLmlbAgLS0tXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVRyYW5zbGF0ZVJlcXVlc3QocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICBkZXRhaWxlZExvZyhcImhhbmRsZVRyYW5zbGF0ZVJlcXVlc3Qg6ZaL5aeL44CC44Oq44Kv44Ko44K544OIOlwiLCByZXF1ZXN0KTtcclxuICB0cnkge1xyXG4gICAgZGV0YWlsZWRMb2coXCLjg63jg7zjgqvjg6vjgrnjg4jjg6zjg7zjgrjjgYvjgonoqK3lrprjgpLoqq3jgb/ovrzjgb/plovlp4suLi5cIik7XHJcbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXHJcbiAgICAgIFwiZ2VtaW5pQXBpS2V5XCIsXHJcbiAgICAgIFwiZGVmYXVsdFRhcmdldExhbmd1YWdlXCIsXHJcbiAgICBdKTtcclxuICAgIGRldGFpbGVkTG9nKFxyXG4gICAgICBcIuiqreOBv+i+vOOCk+OBoOioreWumuOCquODluOCuOOCp+OCr+ODiCAoaXRlbXMpOlwiLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeShpdGVtcywgbnVsbCwgMilcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYXBpS2V5ID0gaXRlbXMuZ2VtaW5pQXBpS2V5O1xyXG4gICAgZGV0YWlsZWRMb2coXCItLS0gQVBJ44Kt44O844OB44Kn44OD44Kv6ZaL5aeLIC0tLVwiKTtcclxuICAgIGRldGFpbGVkTG9nKFwidHlwZW9mIGFwaUtleTpcIiwgdHlwZW9mIGFwaUtleSk7XHJcbiAgICBkZXRhaWxlZExvZyhcImFwaUtleSDjga7lgKQ6XCIsIGFwaUtleSk7IC8vIOKYheOBk+OBk+OBjOacgOOCgumHjeimge+8gVxyXG4gICAgZGV0YWlsZWRMb2coXCJhcGlLZXkgPT09IHVuZGVmaW5lZDpcIiwgYXBpS2V5ID09PSB1bmRlZmluZWQpO1xyXG4gICAgZGV0YWlsZWRMb2coXCJhcGlLZXkgPT09IG51bGw6XCIsIGFwaUtleSA9PT0gbnVsbCk7XHJcbiAgICBkZXRhaWxlZExvZyhcImFwaUtleSA9PT0gJyc6XCIsIGFwaUtleSA9PT0gXCJcIik7XHJcbiAgICBkZXRhaWxlZExvZyhcIiFhcGlLZXkg44Gu6KmV5L6h57WQ5p6cOlwiLCAhYXBpS2V5KTtcclxuICAgIGRldGFpbGVkTG9nKFwiLS0tIEFQSeOCreODvOODgeOCp+ODg+OCr+e1guS6hiAtLS1cIik7XHJcblxyXG4gICAgY29uc3QgdGV4dFRvVHJhbnNsYXRlID0gcmVxdWVzdC50ZXh0O1xyXG4gICAgLy8g44Oq44Kv44Ko44K544OI44GrIHRhcmdldExhbmcg44GM44GC44KM44Gw44Gd44KM44KS5L2/55So44CB44Gq44GR44KM44Gw44OH44OV44Kp44Or44OI6KiA6Kqe44KS5L2/55SoXHJcbiAgICBjb25zdCB0YXJnZXRMYW5ndWFnZSA9XHJcbiAgICAgIHJlcXVlc3QudGFyZ2V0TGFuZyB8fCBpdGVtcy5kZWZhdWx0VGFyZ2V0TGFuZ3VhZ2UgfHwgXCJqYVwiO1xyXG4gICAgZGV0YWlsZWRMb2coXHJcbiAgICAgIFwi57+76Kiz5a++6LGh44OG44Kt44K544OIOlwiLFxyXG4gICAgICB0ZXh0VG9UcmFuc2xhdGUsXHJcbiAgICAgIFwi57+76Kiz5YWI6KiA6KqeOlwiLFxyXG4gICAgICB0YXJnZXRMYW5ndWFnZVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIWFwaUtleSkge1xyXG4gICAgICBjb25zdCBlcnJvck1zZyA9XHJcbiAgICAgICAgXCJBUEnjgq3jg7zjgYzoqK3lrprjgZXjgozjgabjgYTjgb7jgZvjgpPjgILjgqrjg5fjgrfjg6fjg7Pjg5rjg7zjgrjjgafoqK3lrprjgZfjgabjgY/jgaDjgZXjgYTjgIJcIjtcclxuICAgICAgY29uc29sZS5lcnJvcihcIuODkOODg+OCr+OCsOODqeOCpuODs+ODiTogXCIgKyBlcnJvck1zZyk7XHJcbiAgICAgIHNlbmRSZXNwb25zZSh7IGVycm9yOiBlcnJvck1zZyB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFpbGVkTG9nKFwiQVBJ44Kt44O856K66KqNT0vjgIFHZW1pbmkgQVBJ5ZG844Gz5Ye644GX5rqW5YKZXCIpO1xyXG4gICAgY29uc3QgZ2VuQUkgPSBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJKGFwaUtleSk7XHJcbiAgICBjb25zdCBtb2RlbE5hbWUgPSBcImdlbWluaS0xLjUtZmxhc2gtbGF0ZXN0XCI7IC8vIOOBvuOBn+OBryBcImdlbWluaS1wcm9cIiDjgarjganjgIHliKnnlKjjgZfjgZ/jgYTjg6Ljg4fjg6tcclxuICAgIGNvbnN0IG1vZGVsID0gZ2VuQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsKHtcclxuICAgICAgbW9kZWw6IG1vZGVsTmFtZSxcclxuICAgICAgc2FmZXR5U2V0dGluZ3M6IFtcclxuICAgICAgICAvLyDlv4XopoHjgavlv5zjgZjjgaboqr/mlbRcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjYXRlZ29yeTogSGFybUNhdGVnb3J5LkhBUk1fQ0FURUdPUllfSEFSQVNTTUVOVCxcclxuICAgICAgICAgIHRocmVzaG9sZDogSGFybUJsb2NrVGhyZXNob2xkLkJMT0NLX01FRElVTV9BTkRfQUJPVkUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjYXRlZ29yeTogSGFybUNhdGVnb3J5LkhBUk1fQ0FURUdPUllfSEFURV9TUEVFQ0gsXHJcbiAgICAgICAgICB0aHJlc2hvbGQ6IEhhcm1CbG9ja1RocmVzaG9sZC5CTE9DS19NRURJVU1fQU5EX0FCT1ZFLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IEhhcm1DYXRlZ29yeS5IQVJNX0NBVEVHT1JZX1NFWFVBTExZX0VYUExJQ0lULFxyXG4gICAgICAgICAgdGhyZXNob2xkOiBIYXJtQmxvY2tUaHJlc2hvbGQuQkxPQ0tfTUVESVVNX0FORF9BQk9WRSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNhdGVnb3J5OiBIYXJtQ2F0ZWdvcnkuSEFSTV9DQVRFR09SWV9EQU5HRVJPVVNfQ09OVEVOVCxcclxuICAgICAgICAgIHRocmVzaG9sZDogSGFybUJsb2NrVGhyZXNob2xkLkJMT0NLX01FRElVTV9BTkRfQUJPVkUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgZ2VuZXJhdGlvbkNvbmZpZzoge1xyXG4gICAgICAgIC8vIOW/heimgeOBq+W/nOOBmOOBpuioreWumlxyXG4gICAgICAgIC8vIHRlbXBlcmF0dXJlOiAwLjcsXHJcbiAgICAgICAgLy8gbWF4T3V0cHV0VG9rZW5zOiAyMDQ4LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcHJvbXB0ID0gYOS7peS4i+OBruOAjOODhuOCreOCueODiOOAjeOCkuiHqueEtuOBquOAjCR7dGFyZ2V0TGFuZ3VhZ2V944CN44Gr57+76Kiz44GX44Gm44GP44Gg44GV44GE44CC57+76Kiz44GV44KM44Gf44OG44Kt44K544OI44Gu44G/44KS6L+U44GX44Gm44GP44Gg44GV44GE44CCXFxuXFxu44OG44Kt44K544OI77yaXFxuJHt0ZXh0VG9UcmFuc2xhdGV9YDtcclxuICAgIGRldGFpbGVkTG9nKFwiR2VtaW5p44G444Gu44OX44Ot44Oz44OX44OIOlwiLCBwcm9tcHQpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1vZGVsLmdlbmVyYXRlQ29udGVudChwcm9tcHQpO1xyXG4gICAgY29uc3QgZ2VuZXJhdGlvblJlc3BvbnNlID0gcmVzdWx0LnJlc3BvbnNlO1xyXG5cclxuICAgIGlmICghZ2VuZXJhdGlvblJlc3BvbnNlKSB7XHJcbiAgICAgIGxldCBibG9ja1JlYXNvbiA9IFwi5LiN5piO44Gq55CG55SxICjjg6zjgrnjg53jg7PjgrnjgarjgZcpXCI7XHJcbiAgICAgIGxldCBzYWZldHlSYXRpbmdzSW5mbyA9IFwiTi9BXCI7XHJcbiAgICAgIGlmIChyZXN1bHQucmVzcG9uc2UgJiYgcmVzdWx0LnJlc3BvbnNlLnByb21wdEZlZWRiYWNrKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5yZXNwb25zZS5wcm9tcHRGZWVkYmFjay5ibG9ja1JlYXNvbikge1xyXG4gICAgICAgICAgYmxvY2tSZWFzb24gPSByZXN1bHQucmVzcG9uc2UucHJvbXB0RmVlZGJhY2suYmxvY2tSZWFzb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXN1bHQucmVzcG9uc2UucHJvbXB0RmVlZGJhY2suc2FmZXR5UmF0aW5ncykge1xyXG4gICAgICAgICAgc2FmZXR5UmF0aW5nc0luZm8gPSBKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAgcmVzdWx0LnJlc3BvbnNlLnByb21wdEZlZWRiYWNrLnNhZmV0eVJhdGluZ3NcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGVycm9yTXNnID0gYOe/u+ios+ODquOCr+OCqOOCueODiOOBjOODluODreODg+OCr+OBleOCjOOBn+OBi+OAgeODrOOCueODneODs+OCueOBjOOBguOCiuOBvuOBm+OCk+OBp+OBl+OBn+OAgueQhueUsTogJHtibG9ja1JlYXNvbn0sIFNhZmV0eVJhdGluZ3M6ICR7c2FmZXR5UmF0aW5nc0luZm99YDtcclxuICAgICAgY29uc29sZS5lcnJvcihcIuODkOODg+OCr+OCsOODqeOCpuODs+ODiTogXCIgKyBlcnJvck1zZywgcmVzdWx0KTtcclxuICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGVycm9yTXNnIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHJhbnNsYXRlZFRleHQgPSBnZW5lcmF0aW9uUmVzcG9uc2UudGV4dCgpO1xyXG4gICAgZGV0YWlsZWRMb2coXCLnv7voqLPmiJDlip8gKFNESyk6XCIsIHRyYW5zbGF0ZWRUZXh0KTtcclxuICAgIHNlbmRSZXNwb25zZSh7IHRyYW5zbGF0ZWRUZXh0OiB0cmFuc2xhdGVkVGV4dC50cmltKCkgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLjg5Djg4Pjgq/jgrDjg6njgqbjg7Pjg4k6IOe/u+ios+WHpueQhuS4reOBruWMheaLrOeahOOBquOCqOODqeODvDpcIiwgZXJyb3IpO1xyXG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IFwi57+76Kiz5Yem55CG5Lit44Gr5LqI5pyf44Gb44Gs44Ko44Op44O844GM55m655Sf44GX44G+44GX44Gf44CCXCI7XHJcbiAgICBpZiAoZXJyb3IubWVzc2FnZSkge1xyXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gYCAke2Vycm9yLm1lc3NhZ2V9YDtcclxuICAgIH1cclxuICAgIC8vIEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yIOOBruWgtOWQiOOAgeOCiOOCiuips+e0sOOBquaDheWgseOBjOWQq+OBvuOCjOOCi+OBk+OBqOOBjOOBguOCi1xyXG4gICAgaWYgKFxyXG4gICAgICBlcnJvci5uYW1lID09PSBcIkdvb2dsZUdlbmVyYXRpdmVBSVJlc3BvbnNlRXJyb3JcIiB8fFxyXG4gICAgICAoZXJyb3IudG9TdHJpbmcgJiZcclxuICAgICAgICBlcnJvci50b1N0cmluZygpLmluY2x1ZGVzKFwiW0dvb2dsZUdlbmVyYXRpdmVBSSBFcnJvcl1cIikpXHJcbiAgICApIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBcIkdvb2dsZUdlbmVyYXRpdmVBSSBFcnJvciBkZXRhaWxzOlwiLFxyXG4gICAgICAgIGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgZXJyb3Iuc3RhY2ssXHJcbiAgICAgICAgZXJyb3JcclxuICAgICAgKTtcclxuICAgICAgZXJyb3JNZXNzYWdlID0gYEdlbWluaSBBUEnjgqjjg6njg7w6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgfVxyXG4gICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGVycm9yTWVzc2FnZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIOaLoeW8teapn+iDveOCpOODs+OCueODiOODvOODq+aZguOChOOCouODg+ODl+ODh+ODvOODiOaZguOBq+OAgeOCquODl+OCt+ODp+ODs+ODmuODvOOCuOOBp+WIneacn+ioreWumuOCkuS/g+OBmSAo5Lu75oSPKVxyXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihhc3luYyAoZGV0YWlscykgPT4ge1xyXG4gIGRldGFpbGVkTG9nKFwib25JbnN0YWxsZWQg44Kk44OZ44Oz44OIOlwiLCBkZXRhaWxzKTtcclxuICBpZiAoZGV0YWlscy5yZWFzb24gPT09IFwiaW5zdGFsbFwiKSB7XHJcbiAgICAvLyDliJ3lm57jgqTjg7Pjgrnjg4jjg7zjg6vmmYLjgavjgqrjg5fjgrfjg6fjg7Pjg5rjg7zjgrjjgpLplovjgY9cclxuICAgIC8vIGNocm9tZS5ydW50aW1lLm9wZW5PcHRpb25zUGFnZSgpO1xyXG5cclxuICAgIC8vIOOBvuOBn+OBr+OAgeODh+ODleOCqeODq+ODiOioreWumuOCkuabuOOBjei+vOOCgFxyXG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1xyXG4gICAgICBcImRlZmF1bHRUYXJnZXRMYW5ndWFnZVwiLFxyXG4gICAgICBcInRhcmdldExhbmd1YWdlUG9wdXBcIixcclxuICAgIF0pO1xyXG4gICAgaWYgKCFpdGVtcy5kZWZhdWx0VGFyZ2V0TGFuZ3VhZ2UpIHtcclxuICAgICAgZGV0YWlsZWRMb2coXCLjg4fjg5Xjgqnjg6vjg4jjga7nv7voqLPlhYjoqIDoqp7jgpIgJ2phJyDjgavoqK3lrprjgZfjgb7jgZnjgIJcIik7XHJcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGRlZmF1bHRUYXJnZXRMYW5ndWFnZTogXCJqYVwiIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpdGVtcy50YXJnZXRMYW5ndWFnZVBvcHVwKSB7XHJcbiAgICAgIGRldGFpbGVkTG9nKFwi44Od44OD44OX44Ki44OD44OX44Gu57+76Kiz5YWI6KiA6Kqe44KSICdqYScg44Gr6Kit5a6a44GX44G+44GZ44CCXCIpO1xyXG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyB0YXJnZXRMYW5ndWFnZVBvcHVwOiBcImphXCIgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIOOCouODg+ODl+ODh+ODvOODiOaZguOBruWHpueQhuOBquOBqeOCguOBk+OBk+OBq+i/veWKoOWPr+iDvVxyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9