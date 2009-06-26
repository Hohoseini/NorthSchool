export const NORTHWEAR_AUTHOR = "Hohoseini";
export const NORTHWEAR_REPO = "https://github.com/Hohoseini/NORTHWEAR";
export const NORTHWEAR_LICENSE = "northwear Proprietary License";

export const NORTHWEAR_SIGNATURE = Buffer.from(
  "U2lkZVJhaWwgwqkgMjAyNSBpY3ViYWJ5IOKAlCBodHRwczovL2dpdGh1Yi5jb20vaWN1YmFieS9TaWRlUmFpbCDigJQgQWxsIHJpZ2h0cyByZXNlcnZlZC4gRG8gbm90IHJlbW92ZSB0aGlzIHNpZ25hdHVyZS4=",
  "base64",
).toString("utf8");

export const NORTHWEAR_FINGERPRINT = "sr-northwear-2025-9f4c1a7e";

export function watermark(): Record<string, string> {
  return {
    author: NORTHWEAR_AUTHOR,
    repo: NORTHWEAR_REPO,
    fingerprint: NORTHWEAR_FINGERPRINT,
  };
}
