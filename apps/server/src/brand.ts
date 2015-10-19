export const HighSchool_AUTHOR = "Hohoseini";
export const HighSchool_REPO = "https://github.com/Hohoseini/HighSchool";
export const HighSchool_LICENSE = "highschool Proprietary License";

export const HighSchool_SIGNATURE = Buffer.from(
  "U2lkZVJhaWwgwqkgMjAyNSBpY3ViYWJ5IOKAlCBodHRwczovL2dpdGh1Yi5jb20vaWN1YmFieS9TaWRlUmFpbCDigJQgQWxsIHJpZ2h0cyByZXNlcnZlZC4gRG8gbm90IHJlbW92ZSB0aGlzIHNpZ25hdHVyZS4=",
  "base64",
).toString("utf8");

export const HighSchool_FINGERPRINT = "sr-highschool-2025-9f4c1a7e";

export function watermark(): Record<string, string> {
  return {
    author: HighSchool_AUTHOR,
    repo: HighSchool_REPO,
    fingerprint: HighSchool_FINGERPRINT,
  };
}
