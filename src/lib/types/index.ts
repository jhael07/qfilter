type OP =
  | "Equal"
  | "NotEqual"
  | "LessThan"
  | "GreaterThan"
  | "GreaterThanOrEqual"
  | "LessThanOrEqual"
  | "Contains"
  | "NotContains"
  | "StartsWith"
  | "NotStartsWith"
  | "EndsWith"
  | "NotEndsWith"
  | ComparisonOperator;

type FilterType = "startGroup" | "endGroup" | "logicalOperator" | "comparisonOperator";

type FilterGroup = "(" | ")";

type LogicalOperator = "&&" | "||" | "!";

type ComparisonOperator = "===" | "!==" | ">" | "<" | ">=" | "<=";

type commonFilterProps<T> = {
  id: string | number;
  parentId?: string | number | null;
  type: FilterType;
  children?: Array<GroupCondition<T>>;
};

type FilterLogicalOperator<T> = {
  operator: LogicalOperator;
} & commonFilterProps<T>;

type FilterGroupOperator<T> = {
  operator: FilterGroup;
} & commonFilterProps<T>;

type FilterOperator<T> = {
  operator: OP;
  value: string | number | boolean;
  field: keyof T;
} & commonFilterProps<T>;

type FilterBuild<T> = FilterGroupOperator<T> | FilterLogicalOperator<T> | FilterOperator<T>;

type AddFilterFn<T> = (
  id: string | number,
  field: keyof T,
  operator: OP,
  value: number | string | boolean,
  parentId: string | number
) => FilterOperator<T>;

type GroupCondition<T> =
  | FilterOperator<T>
  | FilterGroupOperator<T>
  | (FilterLogicalOperator<T> & commonFilterProps<T>);

export {
  type GroupCondition,
  type OP,
  type FilterType,
  type FilterGroup,
  type LogicalOperator,
  type ComparisonOperator,
  type FilterLogicalOperator,
  type FilterGroupOperator,
  type FilterOperator,
  type FilterBuild,
  type AddFilterFn,
};
