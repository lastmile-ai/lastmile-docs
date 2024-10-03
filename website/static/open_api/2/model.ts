/**
 * Generated via model.json
 * @swagger
{
  "openapi": "3.0.3",
  "info": {
    "title": "LastMile AI API V2",
    "description": "LastMile AI API V2: Components",
    "version": "2.0"
  },
  "servers": [],
  "paths": {
    "/api/2/auto_eval/modelfinetuneworker/executeFineTuneJob": {
      "post": {
        "tags": [
          "Model Fine Tune Worker Service"
        ],
        "summary": "Execute Fine Tune Job",
        "operationId": "executeFineTuneJob",
        "description": "Actually execute the fine-tune job",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ExecuteFineTuneJobRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ExecuteFineTuneJobResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/model/listMetricBases": {
      "post": {
        "tags": [
          "Model Service"
        ],
        "summary": "List Metric Bases",
        "operationId": "listMetricBaseModels",
        "description": "Description of listMetricBases",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.ListMetricBaseModelsRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.ListMetricBaseModelsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/model/getCard": {
      "post": {
        "tags": [
          "Model Service"
        ],
        "summary": "Get Card",
        "operationId": "getModelCard",
        "description": "Description of getCard",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.GetModelCardRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.GetModelCardResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/dataset/createFile": {
      "post": {
        "tags": [
          "Dataset Service"
        ],
        "summary": "Create File",
        "operationId": "createDatasetFile",
        "description": "Description of createFile",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.CreateDatasetFileRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.CreateDatasetFileResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/dataset/checkAccessibility": {
      "post": {
        "tags": [
          "Dataset Service"
        ],
        "summary": "Check Accessibility",
        "operationId": "checkDatasetAccessibility",
        "description": "Description of checkAccessibility",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.CheckDatasetAccessibilityRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.CheckDatasetAccessibilityResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/dataset/introspect": {
      "post": {
        "tags": [
          "Dataset Service"
        ],
        "summary": "Introspect",
        "operationId": "introspectDataset",
        "description": "Description of introspect",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.IntrospectDatasetRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.IntrospectDatasetResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/dataset/collectMetadata": {
      "put": {
        "tags": [
          "Dataset Service"
        ],
        "summary": "Collect Metadata",
        "operationId": "collectDatasetMetadata",
        "description": "Description of collectMetadata",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.CollectDatasetMetadataRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.CollectDatasetMetadataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/dataset/view": {
      "post": {
        "tags": [
          "Dataset Service"
        ],
        "summary": "View",
        "operationId": "viewDataset",
        "description": "Description of view",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.ViewDatasetRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.ViewDatasetResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/dataset/defineSplits": {
      "put": {
        "tags": [
          "Dataset Service"
        ],
        "summary": "Define Splits",
        "operationId": "defineDatasetSplits",
        "description": "Description of defineSplits",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.DefineDatasetSplitsRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.DefineDatasetSplitsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/dataset/createPseudoLabelJob": {
      "post": {
        "tags": [
          "Dataset Service"
        ],
        "summary": "Create Pseudo Label Job",
        "operationId": "createPseudoLabelJob",
        "description": "Description of createPseudoLabelJob",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.CreatePseudoLabelJobRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.CreatePseudoLabelJobResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/dataset/refineLabels": {
      "post": {
        "tags": [
          "Dataset Service"
        ],
        "summary": "Refine Labels",
        "operationId": "refineLabels",
        "description": "Description of refineLabels",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.RefineLabelsRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.RefineLabelsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/dataset/augment": {
      "post": {
        "tags": [
          "Dataset Service"
        ],
        "summary": "Augment",
        "operationId": "augmentDataset",
        "description": "Description of augment",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.AugmentDatasetRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.AugmentDatasetResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/dataset/refineAugmentedRows": {
      "post": {
        "tags": [
          "Dataset Service"
        ],
        "summary": "Refine Augmented Rows",
        "operationId": "refineAugmentedRows",
        "description": "Description of refineAugmentedRows",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.RefineAugmentedRowsRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.RefineAugmentedRowsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/finetune/createJob": {
      "post": {
        "tags": [
          "Fine Tune Service"
        ],
        "summary": "Create Job",
        "operationId": "createFineTuneJob",
        "description": "Description of createJob",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.CreateFineTuneJobRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.CreateFineTuneJobResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/finetune/configureHyperParameters": {
      "put": {
        "tags": [
          "Fine Tune Service"
        ],
        "summary": "Configure Hyper Parameters",
        "operationId": "configureHyperParameters",
        "description": "Description of configureHyperParameters",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.ConfigureHyperParametersRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.ConfigureHyperParametersResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/finetune/runJob": {
      "post": {
        "tags": [
          "Fine Tune Service"
        ],
        "summary": "Run Job",
        "operationId": "runFineTuneJob",
        "description": "Description of runJob",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.RunFineTuneJobRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.RunFineTuneJobResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/finetune/getJobStatus": {
      "post": {
        "tags": [
          "Fine Tune Service"
        ],
        "summary": "Get Job Status",
        "operationId": "getJobStatus",
        "description": "Description of getJobStatus",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.GetJobStatusRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.GetJobStatusResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/finetune/viewResults": {
      "post": {
        "tags": [
          "Fine Tune Service"
        ],
        "summary": "View Results",
        "operationId": "viewFineTuneResults",
        "description": "Description of viewResults",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.ViewFineTuneResultsRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.ViewFineTuneResultsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/deployment/deployInferenceEndpoint": {
      "post": {
        "tags": [
          "Deployment Service"
        ],
        "summary": "Deploy Inference Endpoint",
        "operationId": "deployInferenceEndpoint",
        "description": "Description of deployInferenceEndpoint",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.DeployInferenceEndpointRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.DeployInferenceEndpointResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/2/auto_eval/deployment/createDockerImage": {
      "post": {
        "tags": [
          "Deployment Service"
        ],
        "summary": "Create Docker Image",
        "operationId": "createDockerImage",
        "description": "Description of createDockerImage",
        "security": [
          {
            "Bearer": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmai.proto.webserver.v2.CreateDockerImageRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/lmai.proto.webserver.v2.CreateDockerImageResponse"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "securitySchemes": {
      "Bearer": {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT"
      }
    },
    "schemas": {
      "lmai.proto.model_fine_tuning.v1.DatasetId": {
        "title": "DatasetId",
        "type": "object",
        "properties": {
          "value": {
            "type": "string"
          }
        },
        "required": [
          "value"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.DataRowId": {
        "title": "DataRowId",
        "type": "object",
        "properties": {
          "value": {
            "type": "string"
          }
        },
        "required": [
          "value"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.OperationId": {
        "title": "OperationId",
        "type": "object",
        "properties": {
          "value": {
            "type": "string"
          }
        },
        "required": [
          "value"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.UserId": {
        "title": "UserId",
        "type": "object",
        "properties": {
          "value": {
            "type": "string"
          }
        },
        "required": [
          "value"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.OrganizationId": {
        "title": "OrganizationId",
        "type": "object",
        "properties": {
          "value": {
            "type": "string"
          }
        },
        "required": [
          "value"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.ModelId": {
        "title": "ModelId",
        "type": "object",
        "properties": {
          "value": {
            "type": "string"
          }
        },
        "required": [
          "value"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.ModelAssetId": {
        "title": "ModelAssetId",
        "type": "object",
        "properties": {
          "value": {
            "type": "string"
          }
        },
        "required": [
          "value"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.JobId": {
        "title": "JobId",
        "type": "object",
        "properties": {
          "value": {
            "type": "string"
          }
        },
        "required": [
          "value"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.DVCRepoId": {
        "title": "DVCRepoId",
        "type": "object",
        "properties": {
          "value": {
            "type": "string"
          }
        },
        "required": [
          "value"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.User": {
        "title": "User",
        "type": "object",
        "properties": {
          "id": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.UserId"
          }
        },
        "required": [
          "id"
        ],
        "description": "Basic user. TODO: Merge with other notions of a user."
      },
      "lmai.proto.model_fine_tuning.v1.Organization": {
        "title": "Organization",
        "type": "object",
        "properties": {
          "id": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.OrganizationId"
          }
        },
        "required": [
          "id"
        ],
        "description": "Organization - collection of Users with shared assets. We do not prescribe\n here any semantics about whether a user can be in more than one organization,\n or any other relationships."
      },
      "lmai.proto.model_fine_tuning.v1.Role": {
        "title": "Role",
        "type": "object",
        "properties": {
          "basic": {
            "type": "boolean",
            "description": "\"Basic\" permissions."
          },
          "editor": {
            "type": "boolean",
            "description": "\"Editor\" permissions."
          },
          "owner": {
            "type": "boolean",
            "description": "\"Owner\" permissions."
          }
        },
        "required": [
          "basic",
          "editor",
          "owner"
        ],
        "description": "A role for a principal (likely a user) within an organization. Mostly used\n for Authorization. Anticipating the need for more roles here, we space out\n the values to leave unused numbers so that we can add more later while\n preserving the natural ordering of permissions. We don't prescribe specific\n authorizations here despite the suggestive names."
      },
      "lmai.proto.model_fine_tuning.v1.OrganizationRole": {
        "title": "OrganizationRole",
        "type": "object",
        "properties": {
          "organizationId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.OrganizationId"
          },
          "role": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.Role"
          }
        },
        "required": [
          "organizationId",
          "role"
        ],
        "description": "A role specified in the context of a particular organization. Can be used as\n its own Principal as a convenient way to define groups of permissions."
      },
      "lmai.proto.model_fine_tuning.v1.Principal": {
        "title": "Principal",
        "type": "object",
        "properties": {
          "userId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.UserId"
          },
          "organizationId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.OrganizationId"
          },
          "organizationRole": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.OrganizationRole"
          }
        },
        "required": [
          "userId",
          "organizationId",
          "organizationRole"
        ],
        "description": "A Principal is an entity in an authorization context, such as a user\n requesting read access to a resource or an organization who owns it."
      },
      "lmai.proto.model_fine_tuning.v1.Subject": {
        "title": "Subject",
        "type": "object",
        "properties": {
          "datasetId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DatasetId"
          },
          "modelId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelId"
          },
          "modelAssetId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelAssetId"
          },
          "fineTuneJobId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.JobId"
          },
          "operationId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.OperationId"
          },
          "targetPrincipal": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.Principal"
          },
          "isWildcard": {
            "type": "boolean",
            "description": "When true, this flag dictates that the Subject represents the entire\n resource type. The `id` field must also be a literal \"*\" or else we should\n fail validation, to avoid magic strings or unexpected auth configurations.\n A wildcard subject is especially important for creating new resources of a\n type (CREATE), and listing (LIST), since in each case there is no existing\n ID to base authorization on."
          }
        },
        "required": [
          "datasetId",
          "modelId",
          "modelAssetId",
          "fineTuneJobId",
          "operationId",
          "targetPrincipal",
          "isWildcard"
        ],
        "description": "A Subject is an entity to which access can be granted, such as a dataset."
      },
      "lmai.proto.model_fine_tuning.v1.Predicate": {
        "title": "Predicate",
        "type": "object",
        "properties": {
          "principal": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.Principal"
          },
          "subject": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.Subject"
          },
          "scope": {
            "type": "string"
          }
        },
        "required": [
          "principal",
          "subject",
          "scope"
        ],
        "description": "A Predicate is either a statement or a query of authorization - when a\n Principal, Subject, and Scope are specified, it has a positive or negative\n answer. For example, \"can user 4 access resource 9 to write?\" or something\n like \"user_4:resource_9:write\". When the Principal is omitted, it is a\n Clause, and can be used to specify an authorization constraint on a resource.\n For example, simply \"resource_9:write\", tagging a concrete action with its\n authorization requirements. When the Subject is itself a Principal, the\n Predicate expresses a relation between the Principals. For example, an owner\n user 11 might have write access to a basic user 3, or write access to a whole\n org. Importantly, the target (subject, scope) must have authorization not\n greater than the principal, since the predicate enables \"impersonation\". So,\n an organization should typically not be authorized to act as an individual\n user this way, since it would confer the same authorization to every member."
      },
      "lmai.proto.model_fine_tuning.v1.Clause": {
        "title": "Clause",
        "type": "object",
        "properties": {
          "subject": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.Subject"
          },
          "scope": {
            "type": "string"
          }
        },
        "required": [
          "subject",
          "scope"
        ],
        "description": "A Clause is a Predicate not bound to a Principal, specifying a requirement\n for authorization. Example: \"dataset_5:write\" might represent the \"write\"\n scope on a resource \"dataset_5\""
      },
      "lmai.proto.model_fine_tuning.v1.Policy": {
        "title": "Policy",
        "type": "object",
        "properties": {
          "clauses": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.Clause"
            }
          }
        },
        "required": [
          "clauses"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.ChatMessage": {
        "title": "ChatMessage",
        "type": "object",
        "properties": {
          "role": {
            "type": "string",
            "description": "Role can be 'system', 'user', or 'assistant'."
          },
          "content": {
            "type": "string",
            "description": "The content of the message."
          }
        },
        "required": [
          "role",
          "content"
        ],
        "description": "Represents a message from the user or the assistant."
      },
      "lmai.proto.model_fine_tuning.v1.ChatCompletionRequest": {
        "title": "ChatCompletionRequest",
        "type": "object",
        "properties": {
          "vendor": {
            "type": "string"
          },
          "model": {
            "type": "string",
            "description": "The ID of the model to use for the completion."
          },
          "messages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ChatMessage"
            },
            "description": "The list of messages in the conversation so far."
          },
          "maxTokens": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "description": "The maximum number of tokens to generate."
          },
          "temperature": {
            "type": "number",
            "description": "The temperature to use for the completion."
          },
          "topP": {
            "type": "number",
            "description": "The top_p value to use for the completion."
          }
        },
        "required": [
          "vendor",
          "model",
          "messages",
          "maxTokens",
          "temperature",
          "topP"
        ],
        "description": "The list of messages in the conversation so far."
      },
      "lmai.proto.model_fine_tuning.v1.PromptTemplate": {
        "title": "PromptTemplate",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "messages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ChatMessage"
            }
          }
        },
        "required": [
          "id",
          "messages"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.DVCRepo": {
        "title": "DVCRepo",
        "type": "object",
        "properties": {
          "id": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DVCRepoId"
          },
          "storageUri": {
            "type": "string",
            "description": "For example, S3 URI for bucket, or file URI"
          }
        },
        "required": [
          "id",
          "storageUri"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.DVCFileLocation": {
        "title": "DVCFileLocation",
        "type": "object",
        "properties": {
          "repoId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DVCRepoId"
          },
          "commitHash": {
            "type": "string"
          },
          "relativePath": {
            "type": "string"
          }
        },
        "required": [
          "repoId",
          "commitHash",
          "relativePath"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.DataColumn": {
        "title": "DataColumn",
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "sourceOperationId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.OperationId"
          }
        },
        "required": [
          "name",
          "type",
          "sourceOperationId"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.Dataset": {
        "title": "Dataset",
        "type": "object",
        "properties": {
          "id": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DatasetId"
          },
          "name": {
            "type": "string",
            "description": "Human-readable name for the dataset"
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Tags associated with the dataset"
          },
          "columns": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.Dataset.ColumnsEntry"
            }
          },
          "location": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DVCFileLocation"
          }
        },
        "required": [
          "id",
          "name",
          "tags",
          "columns",
          "location"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.Dataset.ColumnsEntry": {
        "title": "ColumnsEntry",
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DataColumn"
          }
        },
        "required": [
          "key",
          "value"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.DataRow": {
        "title": "DataRow",
        "type": "object",
        "properties": {
          "id": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DataRowId"
          },
          "values": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DataRow.ValuesEntry"
            }
          }
        },
        "required": [
          "id",
          "values"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.DataRow.ValuesEntry": {
        "title": "ValuesEntry",
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "key",
          "value"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.Model": {
        "title": "Model",
        "type": "object",
        "properties": {
          "id": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelId"
          }
        },
        "required": [
          "id"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.MetricBaseModel": {
        "title": "MetricBaseModel",
        "type": "object",
        "properties": {
          "modelId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelId"
          },
          "baseModelArchitecture": {
            "type": "string"
          },
          "baseEvaluationMetric": {
            "type": "string"
          }
        },
        "required": [
          "modelId",
          "baseModelArchitecture",
          "baseEvaluationMetric"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.ModelAsset": {
        "title": "ModelAsset",
        "type": "object",
        "properties": {
          "id": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelAssetId"
          },
          "modelId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelId"
          },
          "location": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DVCFileLocation"
          }
        },
        "required": [
          "id",
          "modelId",
          "location"
        ],
        "description": "Actual file asset(s) corresponding to a model. Can be a directory of assets"
      },
      "lmai.proto.model_fine_tuning.v1.FineTuneMetadata": {
        "title": "FineTuneMetadata",
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "name",
          "description",
          "tags"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.HyperParameters": {
        "title": "HyperParameters",
        "type": "object",
        "properties": {
          "params": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.HyperParameters.ParamsEntry"
            }
          }
        },
        "required": [
          "params"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.HyperParameters.ParamsEntry": {
        "title": "ParamsEntry",
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "key",
          "value"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.TrainingProgress": {
        "title": "TrainingProgress",
        "type": "object",
        "properties": {
          "jobId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.JobId"
          },
          "epoch": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "loss": {
            "type": "number"
          },
          "accuracy": {
            "type": "number"
          },
          "progress": {
            "type": "number"
          },
          "timestamp": {
            "type": "integer"
          }
        },
        "required": [
          "jobId",
          "epoch",
          "loss",
          "accuracy",
          "progress",
          "timestamp"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.FineTuneJob": {
        "title": "FineTuneJob",
        "type": "object",
        "properties": {
          "userId": {
            "type": "string"
          },
          "baseModel": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.Model"
          },
          "baseModelAsset": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelAsset"
          },
          "dataset": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.Dataset"
          },
          "hyperparameters": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.HyperParameters"
          },
          "metadata": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.FineTuneMetadata"
          },
          "trainedModelArtifact": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelAsset"
          }
        },
        "required": [
          "userId",
          "baseModel",
          "baseModelAsset",
          "dataset",
          "hyperparameters",
          "metadata",
          "trainedModelArtifact"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.Operation": {
        "title": "Operation",
        "type": "object",
        "properties": {
          "id": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.OperationId"
          },
          "psudoLabelingOperation": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.PseudoLabelingOperation"
          },
          "evaluationOperation": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.EvaluationOperation"
          },
          "augmentationOperation": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.AugmentationOperation"
          },
          "manualEditOperation": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ManualEditOperation"
          },
          "fineTuneOperation": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.FineTuneOperation"
          },
          "createDatasetOperation": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.CreateDatasetOperation"
          },
          "datasetSplitAssignmentOperation": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DatasetSplitAssignmentOperation"
          }
        },
        "required": [
          "id",
          "psudoLabelingOperation",
          "evaluationOperation",
          "augmentationOperation",
          "manualEditOperation",
          "fineTuneOperation",
          "createDatasetOperation",
          "datasetSplitAssignmentOperation"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.PseudoLabelingOperation": {
        "title": "PseudoLabelingOperation",
        "type": "object",
        "properties": {
          "chatCompletionConfig": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ChatCompletionRequest"
          },
          "promptTemplate": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.PromptTemplate"
          },
          "baseEvaluationMetric": {
            "type": "string"
          }
        },
        "required": [
          "chatCompletionConfig",
          "promptTemplate",
          "baseEvaluationMetric"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.EvaluationOperation": {
        "title": "EvaluationOperation",
        "type": "object",
        "properties": {}
      },
      "lmai.proto.model_fine_tuning.v1.AugmentationOperation": {
        "title": "AugmentationOperation",
        "type": "object",
        "properties": {
          "chatCompletionConfig": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ChatCompletionRequest"
          },
          "promptTemplate": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.PromptTemplate"
          }
        },
        "required": [
          "chatCompletionConfig",
          "promptTemplate"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.ManualEditOperation": {
        "title": "ManualEditOperation",
        "type": "object",
        "properties": {}
      },
      "lmai.proto.model_fine_tuning.v1.FineTuneOperation": {
        "title": "FineTuneOperation",
        "type": "object",
        "properties": {}
      },
      "lmai.proto.model_fine_tuning.v1.CreateDatasetOperation": {
        "title": "CreateDatasetOperation",
        "type": "object",
        "properties": {}
      },
      "lmai.proto.model_fine_tuning.v1.DatasetSplitAssignmentOperation": {
        "title": "DatasetSplitAssignmentOperation",
        "type": "object",
        "properties": {}
      },
      "lmai.proto.model_fine_tuning.v1.PseudoLabelJob": {
        "title": "PseudoLabelJob",
        "type": "object",
        "properties": {
          "userId": {
            "type": "string"
          },
          "dataset": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.Dataset"
          },
          "labelingModel": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.Model"
          },
          "operation": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.PseudoLabelingOperation"
          },
          "metadata": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.PseudoLabelMetadata"
          }
        },
        "required": [
          "userId",
          "dataset",
          "labelingModel",
          "operation",
          "metadata"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.PseudoLabelMetadata": {
        "title": "PseudoLabelMetadata",
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "name",
          "description",
          "tags"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.Job": {
        "title": "Job",
        "type": "object",
        "properties": {
          "id": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.JobId"
          },
          "createdAt": {
            "type": "integer"
          },
          "updatedAt": {
            "type": "integer"
          },
          "creatorUserId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.UserId"
          },
          "status": {
            "type": "string"
          },
          "authorizationPolicy": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.Policy"
          },
          "fineTuneJob": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.FineTuneJob"
          },
          "pseudoLabelJob": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.PseudoLabelJob"
          }
        },
        "required": [
          "id",
          "createdAt",
          "updatedAt",
          "creatorUserId",
          "status",
          "authorizationPolicy",
          "fineTuneJob",
          "pseudoLabelJob"
        ],
        "description": "Common properties for Jobs (typically tasks handled by a worker, async with\n respect to any API)"
      },
      "lmai.proto.model_fine_tuning.v1.ExecuteFineTuneJobRequest": {
        "title": "ExecuteFineTuneJobRequest",
        "type": "object",
        "properties": {
          "fineTuneJobInfo": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.FineTuneJob"
          }
        },
        "required": [
          "fineTuneJobInfo"
        ]
      },
      "lmai.proto.model_fine_tuning.v1.ExecuteFineTuneJobResponse": {
        "title": "ExecuteFineTuneJobResponse",
        "type": "object",
        "properties": {}
      },
      "lmai.proto.webserver.v2.ModelCard": {
        "title": "ModelCard",
        "type": "object",
        "properties": {
          "modelId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelId"
          },
          "title": {
            "type": "string"
          },
          "values": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/lmai.proto.webserver.v2.ModelCard.ValuesEntry"
            }
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "modelId",
          "title",
          "values",
          "tags"
        ]
      },
      "lmai.proto.webserver.v2.ModelCard.ValuesEntry": {
        "title": "ValuesEntry",
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "key",
          "value"
        ]
      },
      "lmai.proto.webserver.v2.InferenceEndpoint": {
        "title": "InferenceEndpoint",
        "type": "object",
        "properties": {
          "endpointUrl": {
            "type": "string"
          },
          "modelId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelId"
          }
        },
        "required": [
          "endpointUrl",
          "modelId"
        ]
      },
      "lmai.proto.webserver.v2.DockerImage": {
        "title": "DockerImage",
        "type": "object",
        "properties": {
          "imageUri": {
            "type": "string"
          },
          "modelId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelId"
          }
        },
        "required": [
          "imageUri",
          "modelId"
        ]
      },
      "lmai.proto.webserver.v2.ListMetricBaseModelsRequest": {
        "title": "ListMetricBaseModelsRequest",
        "type": "object",
        "properties": {}
      },
      "lmai.proto.webserver.v2.ListMetricBaseModelsResponse": {
        "title": "ListMetricBaseModelsResponse",
        "type": "object",
        "properties": {
          "models": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.MetricBaseModel"
            }
          }
        },
        "required": [
          "models"
        ]
      },
      "lmai.proto.webserver.v2.GetModelCardRequest": {
        "title": "GetModelCardRequest",
        "type": "object",
        "properties": {
          "modelId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelId"
          }
        },
        "required": [
          "modelId"
        ]
      },
      "lmai.proto.webserver.v2.GetModelCardResponse": {
        "title": "GetModelCardResponse",
        "type": "object",
        "properties": {
          "modelCard": {
            "$ref": "#/components/schemas/lmai.proto.webserver.v2.ModelCard"
          }
        },
        "required": [
          "modelCard"
        ]
      },
      "lmai.proto.webserver.v2.CreateDatasetFileRequest": {
        "title": "CreateDatasetFileRequest",
        "type": "object",
        "properties": {
          "filename": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "fileContent": {
            "type": "string"
          }
        },
        "required": [
          "filename",
          "url",
          "fileContent"
        ],
        "description": "TODO: Upload via more traditional HTTP route"
      },
      "lmai.proto.webserver.v2.CreateDatasetFileResponse": {
        "title": "CreateDatasetFileResponse",
        "type": "object",
        "properties": {
          "datasetId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DatasetId"
          }
        },
        "required": [
          "datasetId"
        ]
      },
      "lmai.proto.webserver.v2.CheckDatasetAccessibilityRequest": {
        "title": "CheckDatasetAccessibilityRequest",
        "type": "object",
        "properties": {
          "datasetId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DatasetId"
          }
        },
        "required": [
          "datasetId"
        ]
      },
      "lmai.proto.webserver.v2.CheckDatasetAccessibilityResponse": {
        "title": "CheckDatasetAccessibilityResponse",
        "type": "object",
        "properties": {
          "accessible": {
            "type": "boolean"
          },
          "message": {
            "type": "string"
          }
        },
        "required": [
          "accessible",
          "message"
        ]
      },
      "lmai.proto.webserver.v2.IntrospectDatasetRequest": {
        "title": "IntrospectDatasetRequest",
        "type": "object",
        "properties": {
          "datasetId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DatasetId"
          }
        },
        "required": [
          "datasetId"
        ]
      },
      "lmai.proto.webserver.v2.IntrospectDatasetResponse": {
        "title": "IntrospectDatasetResponse",
        "type": "object",
        "properties": {
          "dataset": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.Dataset"
          }
        },
        "required": [
          "dataset"
        ]
      },
      "lmai.proto.webserver.v2.CollectDatasetMetadataRequest": {
        "title": "CollectDatasetMetadataRequest",
        "type": "object",
        "properties": {
          "datasetId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DatasetId"
          },
          "dataset": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.Dataset"
          }
        },
        "required": [
          "datasetId",
          "dataset"
        ]
      },
      "lmai.proto.webserver.v2.CollectDatasetMetadataResponse": {
        "title": "CollectDatasetMetadataResponse",
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean"
          },
          "message": {
            "type": "string"
          }
        },
        "required": [
          "success",
          "message"
        ]
      },
      "lmai.proto.webserver.v2.ViewDatasetRequest": {
        "title": "ViewDatasetRequest",
        "type": "object",
        "properties": {
          "datasetId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DatasetId"
          },
          "pageNumber": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "pageSize": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
          }
        },
        "required": [
          "datasetId",
          "pageNumber",
          "pageSize"
        ]
      },
      "lmai.proto.webserver.v2.ViewDatasetResponse": {
        "title": "ViewDatasetResponse",
        "type": "object",
        "properties": {
          "rows": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DataRow"
            }
          }
        },
        "required": [
          "rows"
        ]
      },
      "lmai.proto.webserver.v2.DefineDatasetSplitsRequest": {
        "title": "DefineDatasetSplitsRequest",
        "type": "object",
        "properties": {
          "datasetId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DatasetId"
          },
          "splitAssignments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/lmai.proto.webserver.v2.DefineDatasetSplitsRequest.SplitAssignmentsEntry"
            }
          }
        },
        "required": [
          "datasetId",
          "splitAssignments"
        ]
      },
      "lmai.proto.webserver.v2.DefineDatasetSplitsRequest.SplitAssignmentsEntry": {
        "title": "SplitAssignmentsEntry",
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "key",
          "value"
        ]
      },
      "lmai.proto.webserver.v2.DefineDatasetSplitsResponse": {
        "title": "DefineDatasetSplitsResponse",
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean"
          },
          "message": {
            "type": "string"
          }
        },
        "required": [
          "success",
          "message"
        ]
      },
      "lmai.proto.webserver.v2.RefineLabelsRequest": {
        "title": "RefineLabelsRequest",
        "type": "object",
        "properties": {
          "datasetId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DatasetId"
          }
        },
        "required": [
          "datasetId"
        ]
      },
      "lmai.proto.webserver.v2.RefineLabelsResponse": {
        "title": "RefineLabelsResponse",
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean"
          },
          "message": {
            "type": "string"
          }
        },
        "required": [
          "success",
          "message"
        ]
      },
      "lmai.proto.webserver.v2.AugmentDatasetRequest": {
        "title": "AugmentDatasetRequest",
        "type": "object",
        "properties": {
          "datasetId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DatasetId"
          },
          "augmentationConfig": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.AugmentationOperation"
          }
        },
        "required": [
          "datasetId",
          "augmentationConfig"
        ]
      },
      "lmai.proto.webserver.v2.AugmentDatasetResponse": {
        "title": "AugmentDatasetResponse",
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean"
          },
          "message": {
            "type": "string"
          }
        },
        "required": [
          "success",
          "message"
        ]
      },
      "lmai.proto.webserver.v2.RefineAugmentedRowsRequest": {
        "title": "RefineAugmentedRowsRequest",
        "type": "object",
        "properties": {
          "datasetId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DatasetId"
          }
        },
        "required": [
          "datasetId"
        ]
      },
      "lmai.proto.webserver.v2.RefineAugmentedRowsResponse": {
        "title": "RefineAugmentedRowsResponse",
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean"
          },
          "message": {
            "type": "string"
          }
        },
        "required": [
          "success",
          "message"
        ]
      },
      "lmai.proto.webserver.v2.CreateFineTuneJobRequest": {
        "title": "CreateFineTuneJobRequest",
        "type": "object",
        "properties": {
          "datasetId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DatasetId"
          },
          "baseModelId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelId"
          },
          "metadata": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.FineTuneMetadata"
          }
        },
        "required": [
          "datasetId",
          "baseModelId",
          "metadata"
        ]
      },
      "lmai.proto.webserver.v2.CreateFineTuneJobResponse": {
        "title": "CreateFineTuneJobResponse",
        "type": "object",
        "properties": {
          "jobId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.JobId"
          }
        },
        "required": [
          "jobId"
        ]
      },
      "lmai.proto.webserver.v2.ConfigureHyperParametersRequest": {
        "title": "ConfigureHyperParametersRequest",
        "type": "object",
        "properties": {
          "jobId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.JobId"
          },
          "hyperparameters": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.HyperParameters"
          }
        },
        "required": [
          "jobId",
          "hyperparameters"
        ]
      },
      "lmai.proto.webserver.v2.ConfigureHyperParametersResponse": {
        "title": "ConfigureHyperParametersResponse",
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean"
          },
          "message": {
            "type": "string"
          }
        },
        "required": [
          "success",
          "message"
        ]
      },
      "lmai.proto.webserver.v2.RunFineTuneJobRequest": {
        "title": "RunFineTuneJobRequest",
        "type": "object",
        "properties": {
          "jobId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.JobId"
          }
        },
        "required": [
          "jobId"
        ]
      },
      "lmai.proto.webserver.v2.RunFineTuneJobResponse": {
        "title": "RunFineTuneJobResponse",
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean"
          },
          "message": {
            "type": "string"
          }
        },
        "required": [
          "success",
          "message"
        ]
      },
      "lmai.proto.webserver.v2.GetJobStatusRequest": {
        "title": "GetJobStatusRequest",
        "type": "object",
        "properties": {
          "jobId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.JobId"
          }
        },
        "required": [
          "jobId"
        ]
      },
      "lmai.proto.webserver.v2.GetJobStatusResponse": {
        "title": "GetJobStatusResponse",
        "type": "object",
        "properties": {
          "status": {
            "type": "string"
          }
        },
        "required": [
          "status"
        ]
      },
      "lmai.proto.webserver.v2.ViewFineTuneResultsRequest": {
        "title": "ViewFineTuneResultsRequest",
        "type": "object",
        "properties": {
          "jobId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.JobId"
          }
        },
        "required": [
          "jobId"
        ]
      },
      "lmai.proto.webserver.v2.ViewFineTuneResultsResponse": {
        "title": "ViewFineTuneResultsResponse",
        "type": "object",
        "properties": {
          "progress": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.TrainingProgress"
            }
          },
          "modelAsset": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelAsset"
          }
        },
        "required": [
          "progress",
          "modelAsset"
        ]
      },
      "lmai.proto.webserver.v2.DeployInferenceEndpointRequest": {
        "title": "DeployInferenceEndpointRequest",
        "type": "object",
        "properties": {
          "modelAssetId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelAssetId"
          }
        },
        "required": [
          "modelAssetId"
        ]
      },
      "lmai.proto.webserver.v2.DeployInferenceEndpointResponse": {
        "title": "DeployInferenceEndpointResponse",
        "type": "object",
        "properties": {
          "endpoint": {
            "$ref": "#/components/schemas/lmai.proto.webserver.v2.InferenceEndpoint"
          }
        },
        "required": [
          "endpoint"
        ]
      },
      "lmai.proto.webserver.v2.CreateDockerImageRequest": {
        "title": "CreateDockerImageRequest",
        "type": "object",
        "properties": {
          "modelAssetId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelAssetId"
          }
        },
        "required": [
          "modelAssetId"
        ]
      },
      "lmai.proto.webserver.v2.CreateDockerImageResponse": {
        "title": "CreateDockerImageResponse",
        "type": "object",
        "properties": {
          "image": {
            "$ref": "#/components/schemas/lmai.proto.webserver.v2.DockerImage"
          }
        },
        "required": [
          "image"
        ]
      },
      "lmai.proto.webserver.v2.CreatePseudoLabelJobRequest": {
        "title": "CreatePseudoLabelJobRequest",
        "type": "object",
        "properties": {
          "userId": {
            "type": "string"
          },
          "datasetId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.DatasetId"
          },
          "labelingModelId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.ModelId"
          },
          "operation": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.PseudoLabelingOperation"
          },
          "metadata": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.PseudoLabelMetadata"
          }
        },
        "required": [
          "userId",
          "datasetId",
          "labelingModelId",
          "operation",
          "metadata"
        ]
      },
      "lmai.proto.webserver.v2.CreatePseudoLabelJobResponse": {
        "title": "CreatePseudoLabelJobResponse",
        "type": "object",
        "properties": {
          "jobId": {
            "$ref": "#/components/schemas/lmai.proto.model_fine_tuning.v1.JobId"
          }
        },
        "required": [
          "jobId"
        ]
      }
    },
    "examples": {}
  }
}
 */

export {};
