import { type ContractRunner } from "ethers";
import type { IEAS, IEASInterface } from "../../contracts/IEAS";
export declare class IEAS__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "attester";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "uid";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "schemaUID";
            readonly type: "bytes32";
        }];
        readonly name: "Attested";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "attester";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "uid";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "schemaUID";
            readonly type: "bytes32";
        }];
        readonly name: "Revoked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "revoker";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "data";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint64";
            readonly name: "timestamp";
            readonly type: "uint64";
        }];
        readonly name: "RevokedOffchain";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "data";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint64";
            readonly name: "timestamp";
            readonly type: "uint64";
        }];
        readonly name: "Timestamped";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "expirationTime";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "revocable";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "refUID";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct AttestationRequestData";
                readonly name: "data";
                readonly type: "tuple";
            }];
            readonly internalType: "struct AttestationRequest";
            readonly name: "request";
            readonly type: "tuple";
        }];
        readonly name: "attest";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "expirationTime";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "revocable";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "refUID";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct AttestationRequestData";
                readonly name: "data";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }];
                readonly internalType: "struct Signature";
                readonly name: "signature";
                readonly type: "tuple";
            }, {
                readonly internalType: "address";
                readonly name: "attester";
                readonly type: "address";
            }, {
                readonly internalType: "uint64";
                readonly name: "deadline";
                readonly type: "uint64";
            }];
            readonly internalType: "struct DelegatedAttestationRequest";
            readonly name: "delegatedRequest";
            readonly type: "tuple";
        }];
        readonly name: "attestByDelegation";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "uid";
            readonly type: "bytes32";
        }];
        readonly name: "getAttestation";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "uid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "time";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "expirationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "revocationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes32";
                readonly name: "refUID";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "attester";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "revocable";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Attestation";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "revoker";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "data";
            readonly type: "bytes32";
        }];
        readonly name: "getRevokeOffchain";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSchemaRegistry";
        readonly outputs: readonly [{
            readonly internalType: "contract ISchemaRegistry";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "data";
            readonly type: "bytes32";
        }];
        readonly name: "getTimestamp";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "uid";
            readonly type: "bytes32";
        }];
        readonly name: "isAttestationValid";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "expirationTime";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "revocable";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "refUID";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct AttestationRequestData[]";
                readonly name: "data";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct MultiAttestationRequest[]";
            readonly name: "multiRequests";
            readonly type: "tuple[]";
        }];
        readonly name: "multiAttest";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "expirationTime";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "revocable";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "refUID";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct AttestationRequestData[]";
                readonly name: "data";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }];
                readonly internalType: "struct Signature[]";
                readonly name: "signatures";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "address";
                readonly name: "attester";
                readonly type: "address";
            }, {
                readonly internalType: "uint64";
                readonly name: "deadline";
                readonly type: "uint64";
            }];
            readonly internalType: "struct MultiDelegatedAttestationRequest[]";
            readonly name: "multiDelegatedRequests";
            readonly type: "tuple[]";
        }];
        readonly name: "multiAttestByDelegation";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "uid";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct RevocationRequestData[]";
                readonly name: "data";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct MultiRevocationRequest[]";
            readonly name: "multiRequests";
            readonly type: "tuple[]";
        }];
        readonly name: "multiRevoke";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "uid";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct RevocationRequestData[]";
                readonly name: "data";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }];
                readonly internalType: "struct Signature[]";
                readonly name: "signatures";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "address";
                readonly name: "revoker";
                readonly type: "address";
            }, {
                readonly internalType: "uint64";
                readonly name: "deadline";
                readonly type: "uint64";
            }];
            readonly internalType: "struct MultiDelegatedRevocationRequest[]";
            readonly name: "multiDelegatedRequests";
            readonly type: "tuple[]";
        }];
        readonly name: "multiRevokeByDelegation";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "data";
            readonly type: "bytes32[]";
        }];
        readonly name: "multiRevokeOffchain";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "data";
            readonly type: "bytes32[]";
        }];
        readonly name: "multiTimestamp";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "uid";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct RevocationRequestData";
                readonly name: "data";
                readonly type: "tuple";
            }];
            readonly internalType: "struct RevocationRequest";
            readonly name: "request";
            readonly type: "tuple";
        }];
        readonly name: "revoke";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "uid";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct RevocationRequestData";
                readonly name: "data";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }];
                readonly internalType: "struct Signature";
                readonly name: "signature";
                readonly type: "tuple";
            }, {
                readonly internalType: "address";
                readonly name: "revoker";
                readonly type: "address";
            }, {
                readonly internalType: "uint64";
                readonly name: "deadline";
                readonly type: "uint64";
            }];
            readonly internalType: "struct DelegatedRevocationRequest";
            readonly name: "delegatedRequest";
            readonly type: "tuple";
        }];
        readonly name: "revokeByDelegation";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "data";
            readonly type: "bytes32";
        }];
        readonly name: "revokeOffchain";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "data";
            readonly type: "bytes32";
        }];
        readonly name: "timestamp";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IEASInterface;
    static connect(address: string, runner?: ContractRunner | null): IEAS;
}
//# sourceMappingURL=IEAS__factory.d.ts.map